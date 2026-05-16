import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header/Header';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'RentalCar',
  description: 'Car rental service',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />

          {children}
        </Providers>
      </body>
    </html>
  );
}