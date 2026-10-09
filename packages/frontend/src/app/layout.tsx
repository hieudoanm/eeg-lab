import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ToastProvider } from '@/components/atoms/toast';
import { TRPCReactProvider } from '@/trpc/react';

import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'NeuroLab',
    template: '%s · NeuroLab',
  },
  description:
    'NeuroLab is a research platform for organising EEG studies, datasets, and descriptive analyses.',
  metadataBase: new URL('https://neurolab.example.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://neurolab.example.com',
    siteName: 'NeuroLab',
    title: 'NeuroLab — EEG Research Platform',
    description:
      'Organise studies, analyse EEG recordings, and run descriptive analyses with full tenant isolation.',
    images: [
      {
        url: '/og/og.png',
        width: 1200,
        height: 630,
        alt: 'NeuroLab - EEG Research Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuroLab — EEG Research Platform',
    description:
      'Organise studies, analyse EEG recordings, and run descriptive analyses with full tenant isolation.',
    images: ['/og/og.png'],
    creator: '@neurolab',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/icons/icon-180x180.png', sizes: '180x180', type: 'image/png' }],
    other: [
      {
        rel: 'manifest',
        url: '/manifest.json',
      },
    ],
  },
  manifest: '/manifest.json',
  themeColor: '#3b82f6',
};

const RootLayout = ({ children }: LayoutProps<'/'>) => {
  return (
    <html lang='en' className={`${inter.variable} h-full`}>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
      </head>
      <body className='min-h-full'>
        <TRPCReactProvider>
          <ToastProvider>{children}</ToastProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
};

export default RootLayout;
