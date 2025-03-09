'use client';

import Link from 'next/link';
import { Vendor } from '@/data/vendors';
import { Button } from '@/components/ui/button';
import { MapPin, Utensils, ShieldCheck, Heart, Navigation } from 'lucide-react';
import { useVendors } from '@/context/VendorContext';
import { useRouter } from 'next/navigation';

interface VendorCardProps {
  vendor: Vendor;
  isFavorite?: boolean;
}

export function VendorCard({ vendor, isFavorite = false }: VendorCardProps) {
  const { addToFavorites, removeFromFavorites } = useVendors();
  const router = useRouter();

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFromFavorites(vendor.id);
    } else {
      addToFavorites(vendor);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
    {/* Vendor Image */}
    <div className="relative h-44 sm:h-48 md:h-52 lg:h-56">
      <img 
        src={vendor.photoUrl} 
        alt={vendor.name}
        className="w-full h-full object-cover"
      />
      {/* Vendor Name Overlay */}
      <div className="absolute top-2 left-2 bg-white/80 text-[#D32F2F] font-semibold px-3 py-1 rounded-full text-xs sm:text-sm">
        {vendor.name}
      </div>
    </div>
    
    {/* Vendor Details */}
    <div className="p-4 flex flex-col flex-grow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-bold text-gray-900">{vendor.name}</h3>
        <Button 
          variant="ghost" 
          className={`p-2 transition-all ${isFavorite ? "text-red-500" : "text-gray-400 hover:text-red-500"}`}
          onClick={handleFavoriteToggle}
        >
          <Heart size={18} className={isFavorite ? "fill-current" : ""} />
        </Button>
      </div>

      {/* Ratings */}
      <div className="grid grid-cols-3 gap-2 mb-3 text-sm text-gray-700">
        <div className="flex items-center">
          <Utensils size={16} className="mr-1 text-[#FF5722]" />
          <span className="font-medium">{vendor.tasteRating}/5</span>
        </div>
        <div className="flex items-center">
          <ShieldCheck size={16} className="mr-1 text-[#FF5722]" />
          <span className="font-medium">{vendor.hygieneRating}/5</span>
        </div>
        <div className="flex items-center">
          <Heart size={16} className="mr-1 text-[#FF5722]" />
          <span className="font-medium">{vendor.hospitalityRating}/5</span>
        </div>
      </div>

      {/* Food Items Display */}
      {vendor.foodItems.length > 0 && (
        <div className="mb-3">
          <div className="flex flex-wrap gap-1 mt-1">
            {vendor.foodItems.slice(0, 3).map((item, index) => (
              <span key={index} className="inline-flex px-2 py-1 text-xs bg-[#FFC107]/10 text-gray-900 rounded-full">
                {item}
              </span>
            ))}
            {vendor.foodItems.length > 3 && (
              <span className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-500 rounded-full">
                +{vendor.foodItems.length - 3} more
              </span>
            )}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-auto pt-4">
        <div className="flex justify-between gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 text-gray-700 border-gray-300 hover:border-gray-500 hover:bg-gray-100"
            onClick={() => router.push(`/vendors/${vendor.id}`)}
          >
            Details
          </Button>
          
          <Button
            size="sm"
            className="flex-1 bg-[#FF5722] hover:bg-[#E64A19] text-white"
            onClick={() => router.push(`/map?vendorId=${vendor.id}`)}
          >
            <Navigation size={16} className="mr-1" />
            Locate
          </Button>
        </div>
      </div>
    </div>
  </div>
  );
}
