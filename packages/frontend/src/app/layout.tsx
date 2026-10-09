import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ToastProvider } from '@/components/toast';
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
};

const RootLayout = ({ children }: LayoutProps<'/'>) => {
  return (
    <html lang='en' className={`${inter.variable} h-full`}>
      <body className='min-h-full'>
        <TRPCReactProvider>
          <ToastProvider>{children}</ToastProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
};

export default RootLayout;
