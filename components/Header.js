import Image from 'next/image';
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';
import HeaderItems from './HeaderItems';

const Header = () => {
  return (
    <header className='flex flex-col justify-between items-center m-5 sm:flex-row'>
      <div className='flex justify-evenly max-w-2xl'>
        <HeaderItems title='home' Icon={HomeIcon} />
        <HeaderItems title='trending' Icon={LightningBoltIcon} />
        <HeaderItems title='verfied' Icon={BadgeCheckIcon} />
        <HeaderItems title='collections' Icon={CollectionIcon} />
        <HeaderItems title='search' Icon={SearchIcon} />
        <HeaderItems title='account' Icon={UserIcon} />
      </div>
      <Image
        className='object-contain cursor-pointer self-center'
        src='https://links.papareact.com/ua6'
        width={200}
        height={100}
        alt='Hulu Logo'
        onClick={() => location.reload()}
      />
    </header>
  );
};

export default Header;
