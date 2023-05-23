import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import { menus } from '@/const/menus';
import Link from 'next/link';
import Header from '@/app/Header';
import TestBtn from '@/components/client/TestBtn';

const baseFont = Noto_Sans_KR({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'My Auth App',
  description: 'Good',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body className={`${baseFont.className} bg-gray-200`}>
        <Header />

        <main>
          <div className='max-w-5xl mx-auto mt-4'>{children}</div>
        </main>
        <TestBtn />
      </body>
    </html>
  );
};

export default RootLayout;
