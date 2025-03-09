'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Map, List, Heart } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg py-2 z-50">
      <div className="container mx-auto max-w-md">
        <div className="flex justify-around items-center">
          <Link 
            href="/" 
            className={`flex flex-col items-center p-2 ${pathname === '/' ? 'text-[#FF5722]' : 'text-[#333333]'}`}
          >
            <Home size={24} />
            <span className="text-xs mt-1">Discover</span>
          </Link>
          
          <Link 
            href="/favorites" 
            className={`flex flex-col items-center p-2 ${pathname === '/favorites' ? 'text-[#FF5722]' : 'text-[#333333]'}`}
          >
            <Heart size={24} />
            <span className="text-xs mt-1">Favorites</span>
          </Link>
          
          <Link 
            href="/map" 
            className={`flex flex-col items-center p-2 ${pathname === '/map' ? 'text-[#FF5722]' : 'text-[#333333]'}`}
          >
            <Map size={24} />
            <span className="text-xs mt-1">Map</span>
          </Link>
          
          <Link 
            href="/vendors" 
            className={`flex flex-col items-center p-2 ${pathname === '/vendors' ? 'text-[#FF5722]' : 'text-[#333333]'}`}
          >
            <List size={24} />
            <span className="text-xs mt-1">All Vendors</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
