import React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../App';

type Props = {
  movies: Movie[]; // Change prop name to 'movies' to reflect that it's an array
};

const MovieList: FC<Props> = ({ movies }) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-4">
      {movies.map(movie => (
        <div key={movie.id}  className='p-4 col-span-1   border rounded-lg shadow-md'>
          <Link to={`/movies/movie_details/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='rounded-md' />
          </Link>
          <h3 className='text-base font-bold'>{movie.title}</h3>
          <span className='text-xs text-yellow-500'>Release Date:{movie.release_date}</span>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
