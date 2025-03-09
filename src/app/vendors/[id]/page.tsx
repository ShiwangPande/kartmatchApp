'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { VendorDetailCard } from '@/components/VendorDetailCard';
import { Navbar } from '@/components/Navbar';
import Comments from '@/components/Comments';
import { Vendor } from '@/data/vendors';
import { useVendors } from '@/context/VendorContext';

export default function VendorDetail() {
  const { id } = useParams<{ id: string }>();
  const { vendors } = useVendors();
  const [vendor, setVendor] = useState<Vendor | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  
  useEffect(() => {
    if (id) {
      // Convert id to number if your vendor id is numeric
      const foundVendor = vendors.find(v => v.id === Number(id));
      if (foundVendor) {
        setVendor(foundVendor);
      } else {
        // Vendor not found; navigate back to vendors list
        router.push('/vendors');
      }
    }
    setLoading(false);
  }, [id, vendors, router]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-[#FF5722] border-t-transparent rounded-full"></div>
      </div>
    );
  }
  
  if (!vendor) return null;
  
  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-to-br from-white to-[#F5F5F5] food-pattern-bg">
      <div className="max-w-md mx-auto mb-20">
        <VendorDetailCard vendor={vendor} />
        {/* Comments section */}
        <Comments vendorId={String(vendor.id)} />
      </div>
      
      <Navbar />
    </div>
  );
}
