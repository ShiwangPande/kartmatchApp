"use client"; // Ensure it's a client component

import { VendorProvider } from '@/context/VendorContext';

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  return <VendorProvider>{children}</VendorProvider>;
}
