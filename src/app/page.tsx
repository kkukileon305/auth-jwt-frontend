import api from '@/utils/api';

const Page = async () => {
  const { data } = await api.get('/posts');

  console.log(data);

  return <div>Main Page</div>;
};

export default Page;
