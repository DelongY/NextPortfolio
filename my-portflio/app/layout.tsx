"use client";
import { usePathname } from 'next/navigation';
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from 'next/font/google';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isRootPage = pathname === '/';

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {!isRootPage && <NavBar />}
        {children}
        {!isRootPage && <Footer />}
      </body>
    </html>
  );
}