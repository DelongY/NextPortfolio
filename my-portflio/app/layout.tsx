import { Inter } from 'next/font/google';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import GoToTopBtn from './components/GoToTopBtn';
import "./globals.css";
import ParticleEffect from './components/ParticleEffect';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Delong Yang',
  description: 'My Portfolio Built with Next.js & TailwindCSS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${inter.className} antialiased`}>
        <ParticleEffect/>
        <NavBar/>
        {children}
        <GoToTopBtn/>
        <Footer/>
      </body>
    </html>
  );
}