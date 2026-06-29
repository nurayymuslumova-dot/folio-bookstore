import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: 'FOLIO | Luxury Bookstore',
  description: 'FOLIO is a refined luxury bookstore experience with premium curation and tactile motion.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.className} bg-black text-white antialiased`}>{children}</body>
    </html>
  );
}
