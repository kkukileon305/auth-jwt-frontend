'use client';

import useTokenStore from '@/store/token.store';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api, { setAuthHeaderToken } from '@/utils/api';

const LogoutBtn = () => {
  const router = useRouter();
  const { setToken, token } = useTokenStore();

  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    setIsLoading(true);

    try {
      await api.post('/auth/logout', {
        userId: token.userId,
      });

      setAuthHeaderToken('');
      setToken({
        accessToken: '',
        refreshToken: '',
        userId: '',
      });

      router.push('/auth/login');
    } catch (e) {
      setIsLoading(false);
    }
  };

  return (
    <button
      className='px-4 py-2 bg-pink-400 text-white rounded-full font-bold disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50'
      disabled={isLoading}
      onClick={onClick}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
