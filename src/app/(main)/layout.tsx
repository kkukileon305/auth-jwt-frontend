import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className='bg-white p-2 md:p-4'>{children}</div>;
};

export default Layout;
