import Link from 'next/link';

const PostBtn = () => {
  return (
    <Link href={'/post'} className='fixed bottom-4 right-4'>
      PostBtn
    </Link>
  );
};

export default PostBtn;
