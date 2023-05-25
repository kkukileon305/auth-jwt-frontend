import { ReactNode, Suspense } from 'react';
import Aside from '@/app/(main)/tags/Aside';
import AsideSkeleton from '@/components/server/skeletons/Aside.skeleton';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex justify-between'>
      <div className='w-[calc(100%-256px)] pr-2 md:pr-4'>{children}</div>
      <div className='w-64 pl-2 md:pl-4'>
        <Suspense fallback={<AsideSkeleton />}>
          {/* @ts-ignore ASC */}
          <Aside />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
