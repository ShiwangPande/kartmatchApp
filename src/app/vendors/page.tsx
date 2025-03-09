'use client';

import { useState } from 'react';
import { VendorCard } from '@/components/VendorCard';
import { Navbar } from '@/components/Navbar';
import { Search } from 'lucide-react';
import { useVendors } from '@/context/VendorContext';
import { Vendor } from '@/data/vendors';

export default function Vendors() {
  const { vendors, favorites } = useVendors();
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(12);
  const filteredVendors = vendors.filter((vendor) => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      vendor.name.toLowerCase().includes(searchTermLower) ||
      vendor.foodItems.some((item) => item.toLowerCase().includes(searchTermLower))
    );
  });

  const isFavorite = (vendor: Vendor) => favorites.some((fav) => fav.id === vendor.id);

  const loadMoreVendors = () => {
    setVisibleCount((prevCount) => prevCount + 15);
  };

  return (
    <div className="min-h-screen py-10 px-6 bg-gradient-to-br from-white to-[#F5F5F5]">
      <div className="max-w-6xl mx-auto mb-24">
        {/* Page Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 text-gray-800">
          Discover <span className="text-[#FF5722]">Vendors</span>
        </h1>

        {/* Search Input */}
        <div className="relative mb-8 mx-auto max-w-lg">
          <Search size={22} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search vendors or food items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-5 h-14 rounded-full border border-gray-300 bg-white text-lg shadow-md focus:border-[#FF5722] focus:ring-2 focus:ring-[#FF5722] transition-all"
          />
        </div>

        {/* Vendor Cards */}
        {filteredVendors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
           {filteredVendors.slice(0, visibleCount).map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} isFavorite={isFavorite(vendor)} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-12 bg-white rounded-xl shadow-lg">
            <p className="text-xl text-gray-700 font-semibold">No vendors found</p>
            <p className="text-sm text-gray-500 mt-2">Try a different search term</p>
          </div>
        )}
      {visibleCount < filteredVendors.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMoreVendors}
              className="px-6 py-2 text-lg font-semibold text-white bg-[#FF5722] rounded-full shadow-md hover:bg-[#e64a19] transition-all"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navigation Bar */}
      <Navbar />
    </div>
  );
}
