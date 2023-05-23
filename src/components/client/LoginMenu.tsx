'use client';

import { useIsClient } from '@/hooks/useIsClient';
import useTokenStore from '@/store/token.store';
import Link from 'next/link';

const LoginMenu = () => {
  const isClient = useIsClient();
  const token = useTokenStore((s) => s.token);

  if (!isClient) {
    return <div className='h-6 w-32 bg-gray-300 rounded-xl' />;
  }

  if (!token.refreshToken) {
    return (
      <Link
        href={'/auth/login'}
        className='text-center bg-pink-400 px-2 rounded-xl font-bold text-white'
      >
        Login
      </Link>
    );
  }

  return (
    <Link
      href={'/profile'}
      className='text-center bg-pink-400 px-2 rounded-xl font-bold text-white'
    >
      Profile
    </Link>
  );
};

export default LoginMenu;
