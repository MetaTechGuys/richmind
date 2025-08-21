import metaImg from '@/public/meta-image.webp'
import type { Metadata, Viewport } from "next"
import { Manrope, Playfair_Display } from "next/font/google"
import type React from "react"
import "./globals.css"

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

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  abstract: meta.description,
  keywords: [
    'Rich Mind',
    'Richmind',
    'Investment',
    'Virtual Assets',
    'media',
    'properties',
    'project Manager',
    'development',
    'holiday',
    'cosmomed',
    'vip Club',
    'sport',
    'academy',
    'trading',
  ],
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
    type: 'website',
    images: metaImage.url,
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    site: meta.url,
    images: metaImage,
    card: 'summary_large_image',
  },
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    nocache: true,
    notranslate: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
  colorScheme: 'dark',
  themeColor: '#8f6f39',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} antialiased`}>
      <head>
        <link rel="icon" type="image/png" href="/icon.png" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
