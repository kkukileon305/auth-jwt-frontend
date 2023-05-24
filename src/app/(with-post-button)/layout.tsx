import { ReactNode } from 'react';
import PostBtn from '@/components/server/buttons/PostBtn';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <PostBtn />
    </>
  );
};

export default Layout;
