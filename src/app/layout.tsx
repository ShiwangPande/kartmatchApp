import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientProvider from '@/components/ClientProvider'; // Import the new client component
import { Toaster } from "@/components/ui/sonner"
import 'leaflet/dist/leaflet.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Street Food Finder',
  description: 'Find the best street food vendors near you',
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
