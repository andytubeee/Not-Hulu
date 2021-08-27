import React from 'react';
import MovieCard from './MovieCard';

export default function Results({ movies }) {
  console.log(movies);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
