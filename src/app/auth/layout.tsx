import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='max-w-2xl mx-auto p-2 md:p-4 bg-white'>{children}</div>
  );
};

export default Layout;
