const array = new Array(4).fill(0).map((_, i) => `key${i}`);

const PostsSkeleton = () => {
  return (
    <ul className='flex flex-wrap gap-4 animate-pulse'>
      {array.map((key) => (
        <li key={key} className='w-[calc((100%-16px)/2)]'>
          <span className='block w-full aspect-video bg-gray-200 rounded-xl mb-2' />
          <h4 className='font-bold text-xl bg-gray-200 w-1/2 h-6 rounded mb-2' />
          <p className='text-gray-500 bg-gray-200 w-1/3 h-4 rounded' />
          <ul className='flex flex-wrap gap-2 mt-2'>
            <li className='bg-gray-200 h-6 rounded w-1/4' />
            <li className='bg-gray-200 h-6 rounded w-1/4' />
            <li className='bg-gray-200 h-6 rounded w-1/4' />
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default PostsSkeleton;
