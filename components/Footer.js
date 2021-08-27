import Image from 'next/image';
import GitHubSVG from '../assets/GitHub.svg';

export default function Footer() {
  return (
    <div className='flex pb-5 pt-3 flex-col justify-center items-center border-t-2 w-5/6 mx-auto'>
      <div className='flex justify-center items-center group'>
        <Image src={GitHubSVG} width={50} height={50} alt='GitHub' />
        <p className='hover:text-white ml-3 hidden group-hover:block'>
          Project made by Andrew Yang
        </p>
      </div>
      <p
        className='hover:text-white cursor-pointer mx-3'
        onClick={() =>
          window.open('https://github.com/andytubeee/Not-Hulu', '_blank')
        }
      >
        View Project on GitHub
      </p>
    </div>
  );
}
