'use client';

import LoginForm from '@/app/auth/login/LoginForm';
import useTokenStore from '@/store/token.store';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const { refreshToken } = useTokenStore((state) => state.token);

  if (refreshToken) {
    router.push('/');
  }

  return <LoginForm />;
};

export default Page;
