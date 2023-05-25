import Title from '@/components/server/texts/Title';
import Posts from '@/components/server/list/Posts';
import { Suspense } from 'react';
import PostsSkeleton from '@/components/server/skeletons/Posts.skeleton';

const Page = async () => {
  return (
    <div className='flex flex-col gap-4'>
      <Suspense fallback={<PostsSkeleton />}>
        {/* @ts-ignore-ASC */}
        <Posts />
      </Suspense>
    </div>
  );
};

export default Page;
