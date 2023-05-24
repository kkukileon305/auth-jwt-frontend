'use client';

import api from '@/utils/api';

const TestBtn = () => {
  const onClick = async () => {
    console.log(api.defaults.headers.Authorization);
  };

  return (
    <button
      onClick={onClick}
      className='fixed bottom-4 left-4 bg-fuchsia-400 w-32 aspect-square rounded-full text-white font-bold hover:bg-fuchsia-600'
    >
      TestBtn
    </button>
  );
};

export default TestBtn;
