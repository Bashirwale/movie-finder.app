import { useState } from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./Components/NavBar";
import SearchedMovies from "./Pages/SearchedMovies";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import MovieDetails from "./Pages/MovieDetails";

export type Movie = {
  id: number;
  title: string;
  poster_path:string;
  overview:string;
  release_date:string;
  popularity:number;
  orginal_language:string;
  vote_average:number;
  total_pages:number;
}

function App() {
  const [searchedItem,setSearchedItem] = useState<string>('');


  const handleSearch = (item: string) => {
    setSearchedItem(item);
  };
  return (
    <Router>
        <Navbar onSearch={handleSearch}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movies/:moviesList" element={<Movies movies={[]}/>} />
          <Route path="/movies/search/:searchedText" element={<SearchedMovies searchedText={searchedItem} Movies={[]}/>} />
          <Route path="/movies/movie_details/:movieId" element={<MovieDetails movies={[]}/>} />
        </Routes>
    </Router>
  );
}

export default App;
