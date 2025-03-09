'use client';

import { Button } from '@/components/ui/button';
import { useVendors } from '@/context/VendorContext';
import { Utensils, ShieldCheck, Heart } from 'lucide-react';
import { PreferenceType } from '@/data/vendors';

export function PreferenceSelector() {
  const { preferences, setPreferences } = useVendors();

  const togglePreference = (pref: PreferenceType) => {
    if (preferences.includes(pref)) {
      setPreferences(preferences.filter(p => p !== pref));
    } else {
      if (preferences.length < 2) {
        setPreferences([...preferences, pref]);
      }
    }
  };

  // The getIcon function remains the same.
  const getIcon = (pref: PreferenceType) => {
    switch (pref) {
      case 'taste': return <Utensils className="mr-2 hidden md:inline" size={18} />;
      case 'hygiene': return <ShieldCheck className="mr-2 hidden md:inline" size={18} />;
      case 'hospitality': return <Heart className="mr-2 hidden md:inline" size={18} />;
    }
  };

  return (
    <div className="mb-6 px-4">
      <h2 className="text-lg md:text-xl font-semibold mb-3 text-center">
        Choose 2 preferences:
      </h2>
      <div className="flex flex-wrap justify-between gap-2">
        <Button
          onClick={() => togglePreference('taste')}
          variant={preferences.includes('taste') ? 'default' : 'outline'}
          className={`flex-1 min-w-[30%] h-12 ${
            preferences.includes('taste')
              ? 'bg-[#FF5722] hover:bg-[#FF5722]/90'
              : ''
          }`}
        >
          {getIcon('taste')}
          Taste
        </Button>

        <Button
          onClick={() => togglePreference('hygiene')}
          variant={preferences.includes('hygiene') ? 'default' : 'outline'}
          className={`flex-1 min-w-[30%] h-12 ${
            preferences.includes('hygiene')
              ? 'bg-[#FF5722] hover:bg-[#FF5722]/90'
              : ''
          }`}
        >
          {getIcon('hygiene')}
          Hygiene
        </Button>

        <Button
          onClick={() => togglePreference('hospitality')}
          variant={preferences.includes('hospitality') ? 'default' : 'outline'}
          className={`flex-1 min-w-[30%] h-12 ${
            preferences.includes('hospitality')
              ? 'bg-[#FF5722] hover:bg-[#FF5722]/90'
              : ''
          }`}
        >
          {getIcon('hospitality')}
          Hospitality
        </Button>
      </div>

      <div className="mt-3 text-center text-sm text-muted-foreground">
        {preferences.length === 2
          ? 'Vendors will be sorted based on your preferences'
          : `Select ${2 - preferences.length} more preference${
              2 - preferences.length > 1 ? 's' : ''
            }`}
      </div>
    </div>
  );
}
