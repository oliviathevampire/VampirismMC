import React from 'react';
import Navbar from '@components/Navbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`bg-black text-white flex flex-col min-h-screen ${inter.className}`}>
      <Navbar />
      <main className="flex-grow">{children}</main>
    </div>
  );
}