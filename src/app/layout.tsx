import './globals.css';
import { Aleo } from 'next/font/google';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import Header from '@/app/Header';
import TestBtn from '@/components/client/buttons/TestBtn';
import Modal from '@/components/client/layout/Modal';
import PostBtn from '@/components/server/buttons/PostBtn';

const baseFont = Aleo({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'My Auth App',
  description: 'Good',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body className={`${baseFont.className} bg-gray-200`}>
        <Header />
        <Modal />
        <main className='max-w-5xl mx-auto p-2 md:p-4'>{children}</main>
        <TestBtn />
      </body>
    </html>
  );
};

export default RootLayout;
