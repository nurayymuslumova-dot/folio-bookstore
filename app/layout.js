import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';

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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0CWG7W7LW1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0CWG7W7LW1');
          `}
        </Script>
      </head>
      <body className={`${plusJakarta.className} bg-black text-white antialiased`}>{children}</body>
    </html>
  );
}