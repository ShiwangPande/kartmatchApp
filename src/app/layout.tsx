import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientProvider from '@/components/ClientProvider'; // Import the new client component
import { Toaster } from "@/components/ui/sonner";
import 'leaflet/dist/leaflet.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kartmatch: When Chat Meet Kart',
  description: 'Find the best street food vendors near you',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientProvider> {/* Wrap content in ClientProvider */}
          {children}
          <Toaster />
        </ClientProvider>
      </body>
    </html>
  );
}
