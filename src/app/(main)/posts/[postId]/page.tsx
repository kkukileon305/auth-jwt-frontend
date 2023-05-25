import api from '@/utils/api';
import { Post } from '@/types';
import Title from '@/components/server/texts/Title';
import TagItem from '@/components/server/items/TagItem';
import LikeBtn from '@/app/(main)/posts/[postId]/LikeBtn';

const Page = async ({ params: { postId } }: { params: { postId: string } }) => {
  const { data: post } = await api.get<Post>(`/posts/${postId}`);

  return (
    <div className='flex flex-col gap-4'>
      <ul className='flex flex-wrap gap-4'>
        {post.tags.map((tag) => (
          <TagItem tag={tag} key={tag.id} />
        ))}
      </ul>

      <Title title={post.title} />
      <p className='text-gray-500'>{post.author.username}</p>
      <p>{post.content}</p>

      <div className='flex justify-center'>
        <LikeBtn post={post} />
      </div>
    </div>
  );
};

export default Page;
