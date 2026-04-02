import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-headline' });
const inter = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = { title: 'haha', description: 'dad' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" /></head>
      <body className="font-body">{children}</body>
    </html>
  );
}
