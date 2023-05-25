import Title from '@/components/server/texts/Title';

const array = new Array(5).fill(0).map((_, i) => `key${i}`);

const ProfileSkeleton = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Title title='Profile' />

      <table className='flex w-full'>
        <thead className='w-32'>
          <tr className='flex flex-col'>
            {array.map((value) => (
              <th key={value} className='border p-2'>
                <span className='h-6 w-16 bg-gray-200 rounded block mx-auto animate-pulse' />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='w-[calc(100%-128px)]'>
          <tr className='flex flex-col'>
            {array.map((value) => (
              <td
                key={value}
                className='border p-2 overflow-hidden whitespace-nowrap animate-pulse'
              >
                <span className='h-6 w-32 bg-gray-200 rounded block' />
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      <div>
        <span className='block w-20 h-10 bg-gray-200 rounded-full animate-pulse ml-auto' />
      </div>
    </div>
  );
};

export default ProfileSkeleton;
