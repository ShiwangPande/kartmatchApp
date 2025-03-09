"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Vendor } from '@/data/vendors';
import { Button } from '@/components/ui/button';
import { MapPin, Utensils, ShieldCheck, Heart, HeartOff, Star } from 'lucide-react';
import { useVendors } from '@/context/VendorContext';

interface VendorDetailCardProps {
  vendor: Vendor;
}

export function VendorDetailCard({ vendor }: VendorDetailCardProps) {
  const { favorites, addToFavorites, removeFromFavorites } = useVendors();
  const router = useRouter();

  const isFavorite = favorites.some(fav => fav.id === vendor.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFromFavorites(vendor.id);
    } else {
      addToFavorites(vendor);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 sm:h-64">
        <img 
          src={vendor.photoUrl} 
          alt={vendor.name}
          className="w-full h-full object-cover"
        />
        {/* Top overlay favorite toggle */}
        <Button 
          variant="outline" 
          className={`absolute top-2 right-2 rounded-full bg-white/80 p-1 sm:p-2 ${
            isFavorite ? 'text-red-500' : 'text-gray-400'
          }`}
          onClick={handleFavoriteToggle}
        >
          {isFavorite ? (
            <Heart size={16} className="fill-current" />
          ) : (
            <Heart size={16} />
          )}
        </Button>
        <Button 
          variant="outline" 
          className="absolute top-2 left-2 rounded-full bg-white/80 p-1 sm:p-2 text-xs sm:text-sm"
          onClick={() => router.back()}
        >
          Back
        </Button>
      </div>
      
      <div className="p-4 sm:p-6">
        <div className="mb-4">
          <h2 className="text-lg sm:text-2xl font-bold">{vendor.name}</h2>
          <div className="flex items-center text-xs sm:text-sm text-gray-500 mt-1">
            <MapPin size={14} className="mr-1 text-[#FF5722]" />
            <span>
              Lat: {vendor.location.coordinates[1].toFixed(6)}, Lng: {vendor.location.coordinates[0].toFixed(6)}
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4">
          {/* Taste Rating */}
          <div className="bg-gray-100 p-2 sm:p-4 rounded-lg flex flex-col items-center">
            <div className="flex items-center mb-1">
              <Utensils size={14} className="mr-1 text-[#FF5722]" />
              <span className="font-medium text-xs sm:text-sm">Taste</span>
            </div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={i < vendor.tasteRating ? "fill-[#FFC107] text-[#FFC107]" : "text-gray-300"}
                />
              ))}
            </div>
          </div>
          
          {/* Hygiene Rating */}
          <div className="bg-gray-100 p-2 sm:p-4 rounded-lg flex flex-col items-center">
            <div className="flex items-center mb-1">
              <ShieldCheck size={14} className="mr-1 text-[#FF5722]" />
              <span className="font-medium text-xs sm:text-sm">Hygiene</span>
            </div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={i < vendor.hygieneRating ? "fill-[#FFC107] text-[#FFC107]" : "text-gray-300"}
                />
              ))}
            </div>
          </div>
          
          {/* Hospitality Rating */}
          <div className="bg-gray-100 p-2 sm:p-4 rounded-lg flex flex-col items-center">
            <div className="flex items-center mb-1">
              <Heart size={14} className="mr-1 text-[#FF5722]" />
              <span className="font-medium text-xs sm:text-sm">Hosp.</span>
            </div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={i < vendor.hospitalityRating ? "fill-[#FFC107] text-[#FFC107]" : "text-gray-300"}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="text-base sm:text-lg font-semibold mb-1">Food Items</h3>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {vendor.foodItems.map((item, index) => (
              <span 
                key={index} 
                className="inline-flex px-2 py-1 text-xs sm:text-sm bg-[#FFC107]/10 text-[#333333] rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <Button 
            variant="outline" 
            className="flex-1 text-xs sm:text-sm"
            onClick={handleFavoriteToggle}
          >
            {isFavorite ? (
              <>
                <HeartOff size={16} className="mr-2 fill-current text-red-500" />
                Unlike
              </>
            ) : (
              <>
                <Heart size={16} className="mr-2" />
                Add to Favorites
              </>
            )}
          </Button>
          
          <Button 
            className="flex-1 bg-[#FF5722] hover:bg-[#FF5722]/90 text-xs sm:text-sm"
            onClick={() => router.push(`/map?vendorId=${vendor.id}`)}
          >
            <MapPin size={16} className="mr-2" />
            View on Map
          </Button>
        </div>
      </div>
    </div>
  );
}
