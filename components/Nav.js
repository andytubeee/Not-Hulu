import { useRouter } from 'next/router';
import { requests } from '../utils/requests';
const Nav = () => {
  const router = useRouter();
  return (
    <div className='2xl:flex'>
      <nav className='relative my-5 mx-auto'>
        <div className='flex overflow-x-scroll text-1xl whitespace-nowrap scrollbar-hide mx-3 space-x-5 sm:space-x-20 sm:ml-10 pl-4 2xl:overflow-x-hidden '>
          {Object.keys(requests).map((key, i) => {
            const genreTitle = requests[key]['title'];
            return (
              <h2
                className='cursor-pointer 
                  hover:text-white active:text-[#38BDF8] transition duration-100 transform hover:scale-125 last:pr-20'
                key={i}
                onClick={() => router.push(`/?genre=${key}`)}
              >
                {genreTitle}
              </h2>
            );
          })}
        </div>
        <div className='absolute top-0 right-0 bg-gradient-to-l from-[#0F222C] h-10 w-1/12'></div>
      </nav>
    </div>
  );
};

export default Nav;
