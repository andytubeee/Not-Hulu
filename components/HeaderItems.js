const HeaderItems = ({ title, Icon }) => {
  return (
    <div className='flex flex-col items-center cursor-pointer group hover:text-white w-20 sm:w-24'>
      <Icon className='h-7 mb-1 group-hover:animate-bounce' />
      <p className='tracking-wide opacity-0 group-hover:opacity-100 text-center'>
        {title.toUpperCase()}
      </p>
    </div>
  );
};

export default HeaderItems;
