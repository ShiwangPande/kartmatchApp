'use client';

import { useState, useRef } from 'react';
import { Vendor } from '@/data/vendors';
import { Button } from '@/components/ui/button';
import { Check, X, MapPin, Utensils, ShieldCheck, Heart } from 'lucide-react';
import { useVendors } from '@/context/VendorContext';

interface FoodCardProps {
  vendor: Vendor;
}

export function FoodCard({ vendor }: FoodCardProps) {
  const { addToFavorites, nextVendor } = useVendors();
  const [swipeAnimation, setSwipeAnimation] = useState<'none' | 'left' | 'right'>('none');
  const cardRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState<number | null>(null);
  const [currentX, setCurrentX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startX === null || !isDragging) return;
    
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    
    if (Math.abs(diff) > 10) {
      // Prevent scrolling when swiping horizontally
      e.preventDefault();
    }
    
    setCurrentX(diff);
    
    if (cardRef.current) {
      cardRef.current.style.transform = `translateX(${diff}px) rotate(${diff * 0.05}deg)`;
    }
  };

  const handleTouchEnd = () => {
    if (startX === null || !isDragging) return;
    
    const threshold = 100; // pixels to consider a swipe
    
    if (currentX > threshold) {
      // Swipe right - like
      handleLike();
    } else if (currentX < -threshold) {
      // Swipe left - dislike
      handleDislike();
    } else {
      // Reset position if not swiped enough
      if (cardRef.current) {
        cardRef.current.style.transform = 'translateX(0) rotate(0)';
      }
    }
    
    setStartX(null);
    setCurrentX(0);
    setIsDragging(false);
  };
  
  const handleLike = () => {
    setSwipeAnimation('right');
    addToFavorites(vendor);
    
    // Reset animation and move to next vendor after animation completes
    setTimeout(() => {
      setSwipeAnimation('none');
      nextVendor();
      
      if (cardRef.current) {
        cardRef.current.style.transform = 'translateX(0) rotate(0)';
      }
    }, 500);
  };
  
  const handleDislike = () => {
    setSwipeAnimation('left');
    
    // Reset animation and move to next vendor after animation completes
    setTimeout(() => {
      setSwipeAnimation('none');
      nextVendor();
      
      if (cardRef.current) {
        cardRef.current.style.transform = 'translateX(0) rotate(0)';
      }
    }, 500);
  };
  
  // Apply the appropriate animation class based on swipe direction
  const cardClass = `food-card animate-card-appear ${
    swipeAnimation === 'right' ? 'swipe-right' : 
    swipeAnimation === 'left' ? 'swipe-left' : ''
  } bg-white rounded-lg shadow-md overflow-hidden`;

  return (
    <div 
      className={cardClass}
      ref={cardRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative">
        <img 
          src={vendor.photoUrl} 
          alt={vendor.name}
          className="w-full h-48 sm:h-64 object-cover"
          draggable="false"
        />
        <div className="absolute top-3 left-3">
          <div className="px-2 py-1 bg-white/80 text-[#D32F2F] font-semibold rounded-full text-sm">
            {vendor.name}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-bold">{vendor.name}</h3>
            <div className="flex items-center text-xs text-gray-500 mt-1">
              <MapPin size={14} className="mr-1 text-[#FF5722]" />
              <span className="truncate">Lat: {vendor.location.coordinates[1].toFixed(4)}, Lng: {vendor.location.coordinates[0].toFixed(4)}</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="flex flex-col items-center p-2 bg-gray-100 rounded-md">
            <div className="flex items-center mb-1">
              <Utensils size={14} className="mr-1 text-[#FF5722]" />
              <span className="text-xs font-medium">Taste</span>
            </div>
            <div className="text-base font-bold">{vendor.tasteRating}/5</div>
          </div>
          
          <div className="flex flex-col items-center p-2 bg-gray-100 rounded-md">
            <div className="flex items-center mb-1">
              <ShieldCheck size={14} className="mr-1 text-[#FF5722]" />
              <span className="text-xs font-medium">Hygiene</span>
            </div>
            <div className="text-base font-bold">{vendor.hygieneRating}/5</div>
          </div>
          
          <div className="flex flex-col items-center p-2 bg-gray-100 rounded-md">
            <div className="flex items-center mb-1">
              <Heart size={14} className="mr-1 text-[#FF5722]" />
              <span className="text-xs font-medium">Hosp.</span>
            </div>
            <div className="text-base font-bold">{vendor.hospitalityRating}/5</div>
          </div>
        </div>
        
        <div className="mb-3">
          <h4 className="text-xs font-semibold mb-1">Food Items:</h4>
          <div className="flex flex-wrap gap-1">
            {vendor.foodItems.slice(0, 3).map((item, index) => (
              <span key={index} className="inline-flex px-2 py-1 text-xs bg-[#FFC107]/10 text-[#333333] rounded-full">
                {item}
              </span>
            ))}
            {vendor.foodItems.length > 3 && (
              <span className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                +{vendor.foodItems.length - 3} more
              </span>
            )}
          </div>
        </div>
        
        <div className="flex justify-between gap-3 mt-2">
          <Button 
            variant="outline" 
            className="w-full h-10 border-2 border-red-500 hover:bg-red-50 text-red-500"
            onClick={handleDislike}
          >
            <X size={20} className="mr-1" />
            Skip
          </Button>
          
          <Button 
            className="w-full h-10 bg-green-500 hover:bg-green-600 text-white"
            onClick={handleLike}
          >
            <Check size={20} className="mr-1" />
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
