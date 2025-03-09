export interface Vendor {
    id: number;
    name: string;
    location: {
      type: string;
      coordinates: [number, number]; // [longitude, latitude]
    };
    foodItems: string[];
    hygieneRating: number;
    tasteRating: number;
    hospitalityRating: number;
    photoUrl: string;
  }
  
  export type PreferenceType = 'hygiene' | 'taste' | 'hospitality';
  