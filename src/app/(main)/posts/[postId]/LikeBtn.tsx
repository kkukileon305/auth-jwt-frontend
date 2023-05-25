'use client';

import { Post } from '@/types';
import useTokenStore from '@/store/token.store';
import api from '@/utils/api';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useIsClient } from '@/hooks/useIsClient';
import { AnimatePresence, motion } from 'framer-motion';

const LikeBtn = ({ post }: { post: Post }) => {
  const isClient = useIsClient();
  const token = useTokenStore((s) => s.token);
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  const isInclude = post.likeUsers.find((user) => user.id === token.userId);

  const onClick = async () => {
    setIsLoading(true);
    try {
      if (isInclude) {
        await api.delete(`/posts/${post.id}/like`, {
          data: {
            userId: token.userId,
          },
        });
      } else {
        await api.post(`/posts/${post.id}/like`, {
          userId: token.userId,
        });
      }

      router.refresh();
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  if (!isClient) {
    return (
      <button className='border p-2 rounded-xl text-gray-200'>
        Like {post.likeUsers.length}
      </button>
    );
  }

  return (
    <div
      className='relative'
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <AnimatePresence>
        {mouseOver && (
          <motion.div
            initial={{ opacity: 0, y: 0, scale: 0.8 }}
            animate={{ opacity: 1, y: -6, scale: 1 }}
            exit={{ opacity: 0, y: 0, scale: 0.8 }}
            transition={{ duration: 0.1 }}
            className='absolute bottom-full right-0 -translate-y-2 origin-bottom-right'
          >
            <div
              className={`${
                isInclude ? 'bg-red-400' : 'bg-blue-400'
              } p-1 rounded`}
            >
              <p className='text-white text-sm'>
                {isInclude ? 'Cancel' : 'Like'}
              </p>
            </div>
            <span
              className={`absolute w-2 h-2 top-full right-2 border border-t-[4px] border-x-4 border-x-transparent border-b-0 
          ${isInclude ? 'border-red-400' : 'border-blue-400'}`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        disabled={isLoading}
        className={`border p-2 rounded-xl disabled:bg-gray-200
      ${
        isInclude
          ? 'border-pink-400 text-pink-500 '
          : 'border-gray-500 text-gray-500 '
      }
      `}
        onClick={onClick}
      >
        Like {post.likeUsers.length}
      </button>
    </div>
  );
};

export default LikeBtn;
