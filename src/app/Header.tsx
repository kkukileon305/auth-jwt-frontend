import { menus } from '@/const/menus';
import Link from 'next/link';
import LoginMenu from '@/components/client/buttons/LoginMenu';

const Header = () => {
  return (
    <header className='bg-white shadow'>
      <div className='flex justify-between max-w-5xl mx-auto p-4'>
        <h1 className='font-bold'>
          <Link href={'/'}>My Auth App</Link>
        </h1>

        <div className='flex gap-4'>
          {menus.map((menu) => (
            <Link key={menu.name} href={menu.href}>
              {menu.name}
            </Link>
          ))}

          <LoginMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
