import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Movie } from '../App';
import { useParams } from 'react-router-dom';
import Spinner from '../Components/shared/Spinner';

type Props = {
  movies: Movie[];
};

const MovieDetails: FC<Props> = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean | string>(false);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${apiKey}`)
      .then(function (response) {
        // Access the response data
        const responseData = response.data;

        // Update the state with the response data
        setMovie(responseData);
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors, if any
        if(error){
          setError(true);
          setError('Error Fetching Movie Details');
          setLoading(false);
        }
      });
  }, [params.movieId]);
 console.log(movie)
 if (loading) {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner/>
    </div>
  );
}

if (error) {
  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-red-500 text-2xl">Error Fetching Movie Details</p>
    </div>
  );
}

if (!movie) {
  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-gray-500 text-2xl">No movie details found</p>
    </div>
  );
}

return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">{movie.title}</h1>
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl w-full">
        <div className="flex-shrink-0">
          <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-48 h-72 object-cover"
          />
        </div>
        <div className="flex flex-col p-4">
          <p className="text-gray-600 text-lg mb-2">
            <span className="font-bold">Release Date:</span> {movie.release_date}
          </p>
          <p className="text-gray-600 text-lg mb-2">
            <span className="font-bold">Overview:</span> {movie.overview}
          </p>
          <p className="text-gray-600 text-lg mb-2">
            <span className="font-bold">Vote Average:</span> {movie.vote_average}
          </p>
        </div>
      </div>
      <button onClick={() => navigate(-1)} className='mt-2 text-center text-white font-medium text-base bg-yellow-500 p-1 rounded-md'> Back</button>
    </div>
  );

};

export default MovieDetails;
