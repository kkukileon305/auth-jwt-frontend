'use client';

import { FormEventHandler, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import api from '@/utils/api';

const RegisterForm = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await api.post('/auth/register', {
        email,
        password,
        username,
      });

      router.push('/auth/login');
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className='max-w-3xl mx-auto flex flex-col gap-4'>
      <h2 className='font-bold text-xl text-center'>My Auth Register</h2>
      <p className='text-center mb-4'>Welcome!</p>

      <label className='flex flex-col gap-2'>
        <span>Email</span>
        <input
          type='email'
          className='border p-2 rounded'
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label className='flex flex-col gap-2'>
        <span>Username</span>
        <input
          type='username'
          className='border p-2 rounded'
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>

      <label className='flex flex-col gap-2'>
        <span>Password</span>
        <input
          type='password'
          className='border p-2 rounded'
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <button
        type='submit'
        className='bg-blue-400 py-2 mt-4 rounded-xl text-white font-bold disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50'
        disabled={isLoading}
      >
        Register
      </button>

      <div className='flex justify-center'>
        <Link href={'/auth/login'} className='text-center text-gray-400'>
          Login
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
