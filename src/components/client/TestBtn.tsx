'use client';

import api from '@/utils/api';

const TestBtn = () => {
  const onClick = async () => {
    console.log(api.defaults.headers.Authorization);
  };

  return <button onClick={onClick}>TestBtn</button>;
};

export default TestBtn;
