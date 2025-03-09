'use client';

import { VendorCard } from '@/components/VendorCard';
import { Navbar } from '@/components/Navbar';
import { Heart } from 'lucide-react';
import { useVendors } from '@/context/VendorContext';
import { useState } from 'react';

export default function Favorites() {
  const { favorites } = useVendors();
    const [visibleCount, setVisibleCount] = useState(8);
    const loadMoreVendors = () => {
        setVisibleCount((prevCount) => prevCount + 15);
      };
  
  return (
    <div className="min-h-screen my-10 py-8 px-4 bg-gradient-to-br from-white to-[#F5F5F5] food-pattern-bg">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#333333]">
          Your <span className="text-[#FF5722]">Favorites</span>
        </h1>
        
        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.slice(0, visibleCount).map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} isFavorite={true} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-lg shadow-md">
            <Heart size={48} className="text-gray-300" />
            <p className="text-lg text-gray-500 mt-4">No favorites yet</p>
            <p className="text-sm text-gray-500">
              Swipe right on vendors you like to add them to favorites
            </p>
          </div>
        )}
           {visibleCount < favorites.length && (
          <div className="flex justify-center mt-8 mb-6">
            <button
              onClick={loadMoreVendors}
              className="px-6 py-2  text-lg font-semibold text-white bg-[#FF5722] rounded-full shadow-md hover:bg-[#e64a19] transition-all"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      <Navbar />
    </div>
  );
}
