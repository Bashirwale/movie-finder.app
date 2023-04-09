import {FC,useEffect,useState} from 'react';
import axios from 'axios';
import { Movie } from '../App';
import {useParams } from 'react-router-dom'
import MovieList from '../Components/MovieList';


type Props = {
  movies:Movie[];
}
const Movies : FC<Props> = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading,setLoading]= useState<boolean>(true);
  const [error,setError]= useState<boolean | string>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const params = useParams();
  useEffect(()=>{
    const apiKey = process.env.REACT_APP_API_KEY;
    axios.get(`https://api.themoviedb.org/3/movie/${params.moviesList}?api_key=${apiKey}&language=en-US&page=${currentPage}`)
      .then(function(response) {
        // Access the response data
        const responseData = response.data.results;
        console.log(response)
        // Update the state with the response data
        setMovies(responseData);
        setTotalPages(response.data.total_pages);
        setLoading(false);
      })
      .catch(error => {
        // Handle errors, if any
        setError('Error Fetching Movies');
        setLoading(false);
      });
      setLoading(false);
  },[params.moviesList,currentPage]);
  console.log(movies)

  
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
 
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-2xl">Loading movie details...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-2xl">Error Fetching Movies</p>
      </div>
    );
  }
  
  if (!movies) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-2xl">No movies found</p>
      </div>
    );
  }

  return (
    <div className='m-auto p-4'>
      <h1 className='text-center text-lg font-bold text-yellow-500 capitalize'>{ params.moviesList}</h1>
      <div className='mt-3'>
        <MovieList movies={movies}/>
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <button
          className={`${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          } bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md`}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="mx-2">
          Current Page: {currentPage} / {totalPages}
        </div>
        <button
          className={`${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
            }bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Movies

