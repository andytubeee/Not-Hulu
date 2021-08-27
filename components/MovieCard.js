import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';

export default function MovieCard({ movie }) {
  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original';
  return (
    <div className='group'>
      <Image
        src={
          `${IMG_BASE_URL}${movie.poster_path || movie.backdrop_path}` ||
          `${IMG_BASE_URL}${movie.poster_path}`
        }
        width={1080}
        height={1920}
        layout='responsive'
        alt={`Poster image for ${movie.original_title}`}
        className='rounded sm:hover:scale-90 transition-all cursor-pointer duration-500'
      />
      <p className='mt-5 truncate max-w-md'>{movie.overview}</p>
      <h1 className='text-3xl mt-2 text-white font-bold group-hover:font-extrabold duration-200 transition-all'>
        {movie.original_title}
      </h1>
      <div className='opacity-0 group-hover:opacity-100 flex'>
        <span>{movie.release_date || movie.first_air_date}</span>
        <span>&nbsp;&#8226;&nbsp;</span>
        <span>
          <ThumbUpIcon className='h-5 mr-2' />
        </span>
        <span>{movie.vote_count}</span>
      </div>
    </div>
  );
}
