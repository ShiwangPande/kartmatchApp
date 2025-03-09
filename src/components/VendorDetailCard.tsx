'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Vendor } from '@/data/vendors';
import { Button } from '@/components/ui/button';
import { MapPin, Utensils, ShieldCheck, Heart, Star } from 'lucide-react';
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
      <div className="relative h-64">
        <img 
          src={vendor.photoUrl} 
          alt={vendor.name}
          className="w-full h-full object-cover"
        />
        <Button 
          variant="outline" 
          className={`absolute top-4 right-4 rounded-full bg-white/80 p-2 ${isFavorite ? 'text-red-500' : 'text-gray-400'}`}
          onClick={handleFavoriteToggle}
        >
          <Heart size={18} className={isFavorite ? "fill-current" : ""} />
        </Button>
        <Button 
          variant="outline" 
          className="absolute top-4 left-4 rounded-full bg-white/80"
          onClick={() => router.back()}
        >
          Back
        </Button>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">{vendor.name}</h2>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <MapPin size={16} className="mr-1 text-[#FF5722]" />
            <span>Lat: {vendor.location.coordinates[1].toFixed(6)}, Lng: {vendor.location.coordinates[0].toFixed(6)}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
            <div className="flex items-center mb-2">
              <Utensils size={18} className="mr-1 text-[#FF5722]" />
              <span className="font-medium">Taste</span>
            </div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  className={i < vendor.tasteRating ? "fill-[#FFC107] text-[#FFC107]" : "text-gray-300"}
                />
              ))}
            </div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
            <div className="flex items-center mb-2">
              <ShieldCheck size={18} className="mr-1 text-[#FF5722]" />
              <span className="font-medium">Hygiene</span>
            </div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  className={i < vendor.hygieneRating ? "fill-[#FFC107] text-[#FFC107]" : "text-gray-300"}
                />
              ))}
            </div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
            <div className="flex items-center mb-2">
              <Heart size={18} className="mr-1 text-[#FF5722]" />
              <span className="font-medium">Hospitality</span>
            </div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  className={i < vendor.hospitalityRating ? "fill-[#FFC107] text-[#FFC107]" : "text-gray-300"}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Food Items</h3>
          <div className="flex flex-wrap gap-2">
            {vendor.foodItems.map((item, index) => (
              <span key={index} className="inline-flex px-2 py-1 text-sm bg-[#FFC107]/10 text-[#333333] rounded-full">
                {item}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between gap-4">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={handleFavoriteToggle}
          >
            <Heart size={18} className={`mr-2 ${isFavorite ? "fill-current text-red-500" : ""}`} />
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </Button>
          
          <Button 
            className="flex-1 bg-[#FF5722] hover:bg-[#FF5722]/90" 
            onClick={() => router.push(`/map?vendorId=${vendor.id}`)}
          >
            <MapPin size={18} className="mr-2" />
            View on Map
          </Button>
        </div>
      </div>
    </div>
  );
}
