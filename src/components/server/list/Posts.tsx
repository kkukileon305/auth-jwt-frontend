import api from '@/utils/api';
import { Post } from '@/types';
import PostItem from '@/components/server/items/PostItem';

const Posts = async () => {
  const { data: posts } = await api.get<Post[]>('/posts');

  return (
    <ul className='flex flex-wrap gap-4'>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </ul>
  );
};

export default Posts;
