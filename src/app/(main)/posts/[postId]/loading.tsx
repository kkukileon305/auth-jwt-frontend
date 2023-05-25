const Loading = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-wrap gap-4'>
        <div className='w-20 h-8 bg-gray-200 animate-pulse rounded' />
        <div className='w-20 h-8 bg-gray-200 animate-pulse rounded' />
        <div className='w-20 h-8 bg-gray-200 animate-pulse rounded' />
      </div>

      <div className='w-1/2 h-10 bg-gray-200 animate-pulse rounded-xl' />
      <div className='w-1/4 h-4 bg-gray-200 animate-pulse rounded-xl' />
      <div className='w-2/3 h-4 bg-gray-200 animate-pulse rounded-xl' />
      <div className='w-2/3 h-4 bg-gray-200 animate-pulse rounded-xl' />
      <div className='w-1/3 h-4 bg-gray-200 animate-pulse rounded-xl' />
    </div>
  );
};

export default Loading;
