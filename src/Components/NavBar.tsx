import React, { useState,FC } from "react";
import {Link,useNavigate} from 'react-router-dom'

type Props = {
  onSearch: (searchItem: string) => void;
}

const NavBar:FC<Props> = ({onSearch}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchedText,setSearchedText] = useState<string>('');

  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu=  () => {
    setIsMobileMenuOpen(false);
  }
 
  const handleSearch  = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchedText);
    navigate(`/movies/search/${searchedText}`);
    setSearchedText('')
  }


  return (
    <nav className="flex items-center justify-between bg-gray-800 text-yellow-300 p-4">
      <div className="flex items-center">
        <h1 className="text-lg font-bold text-yellow-500">
          <Link to='/' onClick={closeMobileMenu}>Movie-Finder</Link
        ></h1>
        <ul className="hidden md:flex ml-8 space-x-4">
          <li>
            <Link to="/movies/popular">Popular</Link>
          </li>
          <li>
            <Link to="/movies/top_rated">Top Rated</Link>
          </li>
          <li>
            <Link to="/movies/upcoming">Upcoming</Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:block">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchedText}
            name="query"
            className="px-2 py-1 text-yellow-500 bg-yellow-100 rounded-md focus:outline-none"
            placeholder="Search movies"
            onChange={(e) => setSearchedText(e.target.value)}
          />
          <button
            type="submit"
            className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md ml-2"
          >
            Search
          </button>
        </form>
      </div>
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 9h14a1 1 0 110 2H3a1 1 0 110-2zm0-4h14a1 1 0 110 2H3a1 1 0 110-2zm0 8h14a1 1 0 110 2H3a1 1 0 010-2z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 right-0 mt-16 p-10 h-1/2 bg-gray-800 w-full">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link to="/movies/popular" onClick={closeMobileMenu} className="block py-2">Popular</Link>
            </li>
            <li>
              <Link to="/movies/top_rated" onClick={closeMobileMenu} className="block py-2">Top Rated</Link>
            </li>
            <li>
              <Link to="/movies/upcoming" onClick={closeMobileMenu} className="block py-2">Upcoming</Link>
            </li>
            <li >
                <form onSubmit={handleSearch}>
                  <input
                      type="text"
                      name="query"
                      value={searchedText}
                      className="px-2 py-1 text-black bg-white rounded-md focus:outline-none"
                      placeholder="Search movies"
                      onChange={(e) => setSearchedText(e.target.value)}
                  />
                  <button
                       type="submit"
                       className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md ml-2"
                       onClick={closeMobileMenu}
                  >
                      Search
                  </button>
                </form>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default NavBar;
