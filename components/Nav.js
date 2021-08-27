import { requests } from '../utils/requests';
const Nav = () => {
  return (
    <nav>
      <div className='flex justify-evenly'>
        {Object.keys(requests).map((r, i) => (
          <h2 className='cursor-pointer hover:text-white' key={i}>
            {requests[r]['title']}
          </h2>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
