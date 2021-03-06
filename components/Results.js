import React from 'react';
import MovieCard from './MovieCard';

export default function Results({ movies }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 mx-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
