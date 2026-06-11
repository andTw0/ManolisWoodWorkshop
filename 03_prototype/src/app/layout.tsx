import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Manolis Tsouris – Olive Wood Artist',
  description: 'Responsive prototype for the Manolis Tsouris scroll-story website.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
