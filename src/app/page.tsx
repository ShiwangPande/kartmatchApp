'use client';

import React, { useState } from 'react';
import { PreferenceSelector } from '@/components/PreferenceSelector';
import { FoodCard } from '@/components/FoodCard';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { RefreshCw } from 'lucide-react';
import { useVendors } from '@/context/VendorContext';

export default function Home() {
  const { preferences, shuffledVendors, currentVendorIndex, resetVendors } = useVendors();
  const currentVendor = shuffledVendors[currentVendorIndex];
  // State to toggle preference selector on mobile
  const [showPreferences, setShowPreferences] = useState(false);

  return (
    <div className="flex flex-col h-screen w-full bg-gradient-to-br from-white to-[#F5F5F5] food-pattern-bg overflow-hidden">
      <div className="flex-1 overflow-y-auto pt-4 px-4 sm:px-6 pb-16">
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-4 text-[#333333]">
          Street Food <span className="text-[#FF5722]">Finder</span>
        </h1>

        <div className="max-w-md mx-auto sm:max-w-2xl flex flex-col">
          {/* On mobile, toggle the preference selector */}
          <div className="sm:hidden mb-4">
            <Button 
              onClick={() => setShowPreferences(!showPreferences)}
              className="w-full bg-[#FF5722] text-white hover:bg-[#FF5722]/90"
            >
              {showPreferences ? 'Hide Preferences' : 'Show Preferences'}
            </Button>
          </div>
          {/* Always show on larger screens */}
          <div className={`${showPreferences ? 'block' : 'hidden'} sm:block`}>
            <PreferenceSelector />
          </div>

          {preferences.length === 2 ? (
            <>
              {currentVendor ? (
                <div className="mt-4 flex-1 flex flex-col">
                  <div className="mb-2 flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-500">
                      Vendor {currentVendorIndex + 1} of {shuffledVendors.length}
                    </span>
                    <Button 
                      variant="ghost" 
                      className="text-[#FF5722] h-8 px-2"
                      onClick={resetVendors}
                    >
                      <RefreshCw size={14} className="mr-1" />
                      Shuffle
                    </Button>
                  </div>
                  <div className="flex-1 flex items-center justify-center mb-4">
                    <FoodCard vendor={currentVendor} />
                  </div>
                </div>
              ) : (
                <div className="text-center p-6 bg-white rounded-lg shadow-sm mt-4">
                  <p className="text-lg text-gray-500 mb-4">No vendors available</p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center p-6 bg-white rounded-lg shadow-sm mt-4">
              <p className="text-base text-gray-500">Select 2 preferences to see vendors</p>
            </div>
          )}
        </div>
      </div>

      <Navbar />
    </div>
  );
}
