import Title from '@/components/server/texts/Title';
import api from '@/utils/api';
import { Post } from '@/types';
import PostItem from '@/components/server/items/PostItem';

interface PageProps {
  params: {
    tagName: string;
  };
}

const Page = async ({ params: { tagName } }: PageProps) => {
  const { data: posts } = await api.get<Post[]>(`/tags/${tagName}`);

  return (
    <div className='flex flex-col gap-4'>
      <Title title={`#${tagName}`} />

      <ul className='flex flex-wrap gap-4'>
        {posts.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </ul>
    </div>
  );
};

export default Page;
