'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useIsClient } from '@/hooks/useIsClient';
import useTokenStore from '@/store/token.store';
import LogoutBtn from '@/app/profile/LogoutBtn';
import api from '@/utils/api';
import { User } from '@/types';

const Page = () => {
  const router = useRouter();
  const isClient = useIsClient();
  const token = useTokenStore((s) => s.token);

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.post<User>('/auth/me');

        setUser(data);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    })();
  }, []);

  if (!isClient || isLoading) {
    return (
      <div className='bg-white p-4'>
        <div className='h-6 w-1/2 bg-gray-200 rounded-xl mb-4' />
        <div className='h-6 w-1/3 bg-gray-200 rounded-xl mb-4' />
      </div>
    );
  }

  if (!token.refreshToken) {
    router.push('/auth/login');
  }

  return (
    <div className='bg-white p-4'>
      <h2 className='font-bold text-2xl mb-8'>Profile</h2>

      {Object.entries(user || {}).map(([key, value]) => (
        <div key={key}>
          <span className='font-bold'>{key}</span>: {value.toString()}
        </div>
      ))}

      <div className='flex justify-end'>
        <LogoutBtn />
      </div>
    </div>
  );
};

export default Page;
