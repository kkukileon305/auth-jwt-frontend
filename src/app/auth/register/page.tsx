'use client';

import RegisterForm from '@/app/auth/register/RegisterForm';
import { useRouter } from 'next/navigation';
import useTokenStore from '@/store/token.store';

const Page = () => {
  const router = useRouter();
  const { refreshToken } = useTokenStore((state) => state.token);

  if (refreshToken) {
    router.push('/');
  }

  return <RegisterForm />;
};

export default Page;
