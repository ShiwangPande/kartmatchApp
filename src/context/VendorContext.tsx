"use client"; // Ensure this is a client component

import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
import { vendors as initialVendors } from '@/data/vendors';
import { Vendor, PreferenceType } from '@/types/vendor';

interface VendorContextType {
  vendors: Vendor[];
  currentVendorIndex: number;
  favorites: Vendor[];
  preferences: PreferenceType[];
  setPreferences: (prefs: PreferenceType[]) => void;
  addToFavorites: (vendor: Vendor) => void;
  removeFromFavorites: (vendorId: number) => void;
  nextVendor: () => void;
  resetVendors: () => void;
  shuffledVendors: Vendor[];
  radius: number;
  setRadius: (radius: number) => void;
  userLocation: [number, number] | null;
  setUserLocation: (location: [number, number] | null) => void;
}

const VendorContext = createContext<VendorContextType | undefined>(undefined);

export const VendorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Use initialVendors from data (do not update this state unless you plan to modify it)
  const [vendors] = useState<Vendor[]>(initialVendors);
  const [shuffledVendors, setShuffledVendors] = useState<Vendor[]>([]);
  const [currentVendorIndex, setCurrentVendorIndex] = useState<number>(0);
  const [favorites, setFavorites] = useState<Vendor[]>([]);
  const [preferences, setPreferences] = useState<PreferenceType[]>([]);
  const [radius, setRadius] = useState<number>(5); // Default 5km radius
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

  // Load favorites from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }, [favorites]);

  // When preferences change (and at least 2 are selected), re-sort the vendors
  useEffect(() => {
    if (preferences.length === 2) {
      shuffleVendorsByPreferences();
    }
  }, [preferences, vendors]);

  const shuffleVendorsByPreferences = () => {
    const shuffled = [...vendors].sort((a, b) => {
      // Calculate a weighted score based on the selected preferences
      const aScore = preferences.reduce((score, pref) => score + a[`${pref}Rating`], 0);
      const bScore = preferences.reduce((score, pref) => score + b[`${pref}Rating`], 0);
      return bScore - aScore; // Higher scores come first
    });
    setShuffledVendors(shuffled);
    setCurrentVendorIndex(0);
  };

  const toastOptions = {
      duration: 2000, // 2 seconds duration
      position: 'top-center' as Position, // positions toast at the top center
    };

  const addToFavorites = (vendor: Vendor) => {
    if (!favorites.some(fav => fav.id === vendor.id)) {
      setFavorites(prev => [...prev, vendor]);
      toast("Added to favorites", {
        description: `${vendor.name} has been added to your favorites.`,
        style: {
          background: '#00897B', // a teal green for success
          color: '#fff',
          border: '1px solid #fff',
          fontSize: '0.85rem',
          padding: '0.75rem'
        },
        ...toastOptions,
      });
    }
  };

  const removeFromFavorites = (vendorId: number) => {
    setFavorites(prev => prev.filter(vendor => vendor.id !== vendorId));
    toast("Removed from favorites", {
      description: "Vendor has been removed from your favorites.",
      style: {
        background: '#D32F2F', // a bold red
        color: '#fff',
        border: '1px solid #fff',
        fontSize: '0.85rem',
        padding: '0.75rem'
      },
      ...toastOptions,
    });
  };

  const nextVendor = () => {
    if (currentVendorIndex < shuffledVendors.length - 1) {
      setCurrentVendorIndex(prev => prev + 1);
    } else {
      toast("End of list", {
        description: "You've seen all vendors. Resetting to start.",
        style: {
          background: '#555',
          color: '#fff',
          border: '1px solid #fff',
          fontSize: '0.85rem',
          padding: '0.75rem'
        },
        ...toastOptions,
      });
      setCurrentVendorIndex(0);
    }
  };

  const resetVendors = () => {
    shuffleVendorsByPreferences();
    setCurrentVendorIndex(0);
  };

  return (
    <VendorContext.Provider
      value={{
        vendors,
        currentVendorIndex,
        favorites,
        preferences,
        setPreferences,
        addToFavorites,
        removeFromFavorites,
        nextVendor,
        resetVendors,
        shuffledVendors,
        radius,
        setRadius,
        userLocation,
        setUserLocation,
      }}
    >
      {children}
    </VendorContext.Provider>
  );
};

export const useVendors = () => {
  const context = useContext(VendorContext);
  if (context === undefined) {
    throw new Error('useVendors must be used within a VendorProvider');
  }
  return context;
};
