import { Inter } from 'next/font/google';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import "./globals.css";
import ParticleEffect from './components/ParticleEffect';

const inter = Inter({ subsets: ['latin'] });

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
        <Footer/>
      </body>
    </html>
  );
}