const array = new Array(4).fill(0).map((_, i) => `key${i}`);

const AsideSkeleton = () => {
  return (
    <div>
      <ul className='flex flex-wrap gap-x-4 gap-y-2'>
        {array.map((i) => (
          <li className='w-16 h-8 rounded bg-gray-300 animate-pulse' key={i} />
        ))}
      </ul>
    </div>
  );
};

export default AsideSkeleton;
