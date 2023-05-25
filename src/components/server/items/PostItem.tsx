import { Post } from '@/types';
import Link from 'next/link';
import TagItem from '@/components/server/items/TagItem';

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <li className='w-[calc((100%-16px)/2)]'>
      <Link href={`/posts/${post.id}`}>
        <span className='block w-full aspect-video bg-red-200 rounded-xl mb-2' />
        <h4 className='font-bold text-xl'>{post.title}</h4>
        <p className='text-gray-500'>{post.author.username}</p>
      </Link>

      <ul className='flex flex-wrap gap-2 mt-2'>
        {post.tags.map((tag) => (
          <TagItem tag={tag} key={tag.id} />
        ))}
      </ul>
    </li>
  );
};

export default PostItem;
