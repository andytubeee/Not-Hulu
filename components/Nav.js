import { requests } from '../utils/requests';
const Nav = () => {
  return (
    <nav className='relative'>
      <div className='flex justify-evenly overflow-x-auto px-3 text-1xl whitespace-nowrap scrollbar-hide mx-3 space-x-10 sm:space-x-20'>
        {Object.keys(requests).map((r, i) => (
          <h2
            className='cursor-pointer 
            hover:text-white active:text-red-500 transition duration-100 transform hover:scale-125'
            key={i}
          >
            {requests[r]['title']}
          </h2>
        ))}
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#0F222C] h-10 w-1/12'></div>
    </nav>
  );
};

export default Nav;
