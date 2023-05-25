import PostsSkeleton from '@/components/server/skeletons/Posts.skeleton';

const Loading = () => {
  return (
    <div>
      <span className='block w-16 h-8 bg-gray-200 rounded mb-4' />

      <PostsSkeleton />
    </div>
  );
};

export default Loading;
