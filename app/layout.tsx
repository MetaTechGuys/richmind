import type React from "react"
import type { Metadata } from "next"
import { Geist, Playfair_Display } from "next/font/google"
import { Manrope } from "next/font/google"
import "./globals.css"
import metaImg from '@/public/meta-image.webp';

const serif = Playfair_Display({
  variable: '--google-font-serif',
  weight: ['400', '700'],
  subsets: ['latin'],
  preload: true,
  display: 'swap',
  fallback: ['Times New Roman', 'Times', 'serif'],
});

const sans = Manrope({
  variable: '--google-font-sans',
  weight: ['400', '700'],
  subsets: ['latin'],
  preload: true,
  display: 'swap',
  fallback: ['Arial', 'Helvetica', 'Tahoma', 'Roboto'],
});

const meta = {
  title: 'RichMind Holding',
  description:
    'Multinational Corporation With an Extensive Portofolio of Resources in Rapidly expanding industries.',
  url: 'https://www.richmindholding.com/',
} as const;

const metaImage = {
  ...metaImg,
  alt: meta.title,
  url: meta.url + metaImg.src,
} as const;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
