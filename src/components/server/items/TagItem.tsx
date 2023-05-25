'use client';

import { Acme } from 'next/font/google';
import { Tag } from '@/types';
import Link from 'next/link';
import {
  useParams,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from 'next/navigation';

const tagFont = Acme({
  subsets: ['latin'],
  weight: ['400'],
});

interface TagItemProps {
  tag: Tag;
}

const TagItem = ({ tag }: TagItemProps) => {
  const segment = useSelectedLayoutSegment();

  return (
    <li className={`${tagFont.className}`}>
      <Link
        href={`/tags/${tag.tagName}`}
        className={`block w-fit px-2 py-1 border rounded shadow bg-white
        ${
          segment === tag.tagName
            ? 'bg-gray-400 text-gray-600'
            : 'bg-white text-gray-400 hover:bg-gray-200 '
        }`}
      >
        #{tag.tagName}
      </Link>
    </li>
  );
};

export default TagItem;
