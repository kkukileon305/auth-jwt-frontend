import './globals.css';
import { Noto_Sans_KR, Aleo } from 'next/font/google';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import Header from '@/app/Header';
import TestBtn from '@/components/client/buttons/TestBtn';
import Modal from '@/components/client/layout/Modal';

const baseFont = Aleo({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'My Auth App',
  description: 'Good',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body className={`${baseFont.className} bg-gray-200`}>
        <Modal />

        <Header />

        <main>
          <div className='max-w-5xl mx-auto mt-4 px-4'>{children}</div>
        </main>
        <TestBtn />
      </body>
    </html>
  );
};

export default RootLayout;
