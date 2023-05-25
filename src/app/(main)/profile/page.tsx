'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useIsClient } from '@/hooks/useIsClient';
import useTokenStore from '@/store/token.store';
import LogoutBtn from '@/app/(main)/profile/LogoutBtn';
import api from '@/utils/api';
import { User } from '@/types';
import ProfileSkeleton from '@/components/server/skeletons/Profile.skeleton';
import Title from '@/components/server/texts/Title';

const Page = () => {
  const router = useRouter();
  const isClient = useIsClient();
  const token = useTokenStore((s) => s.token);

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.post<User>('/auth/profile');

        setUser(data);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    })();
  }, []);

  if (!isClient || isLoading) {
    return <ProfileSkeleton />;
  }

  if (!token.refreshToken) {
    router.push('/auth/login');
  }

  return (
    <div className='flex flex-col gap-4'>
      <Title title='Profile' />

      <table className='flex w-full'>
        <thead className='w-32'>
          <tr className='flex flex-col'>
            {Object.keys(user || {}).map((key) => (
              <th key={key} className='border p-2'>
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='w-[calc(100%-128px)]'>
          <tr className='flex flex-col'>
            {Object.values(user || {}).map((value) => (
              <td
                key={value}
                className='border p-2 overflow-hidden whitespace-nowrap'
              >
                {value}
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      <div className='flex justify-end'>
        <LogoutBtn />
      </div>
    </div>
  );
};

export default Page;
