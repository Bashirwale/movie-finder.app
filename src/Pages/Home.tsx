const Home = () => {
  return (
    <div className="min-h-screen">
      <header className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold text-center text-yellow-500">Welcome to Movie Finder</h1>
          <p className="mt-2 text-gray-600 italic">
            Find information about your favorite movies, search for new releases, and discover
            upcoming movies using our Movie Finder app.
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-md shadow-md p-4">
            <img src='https://www.searchenginejournal.com/wp-content/uploads/2021/11/digital-video-advertising-61cbfa8047963-sej.png' alt="Movie Finder" className="w-full h-48 object-cover mb-4 rounded-md" />
            <h2 className="text-xl font-semibold">Search Movies</h2>
            <p className="mt-2 text-gray-600">
              Enter keywords in the search bar to find movies based on their titles, genres, or
              actors. Get detailed information about each movie, such as release date, rating,
              synopsis, and cast.
            </p>
          </div>
          <div className="bg-white rounded-md shadow-md p-4">
            <img src='https://www.searchenginejournal.com/wp-content/uploads/2021/11/digital-video-advertising-61cbfa8047963-sej.png' alt="Movie Finder" className="w-full h-48 object-cover mb-4 rounded-md" />
            <h2 className="text-xl font-semibold">Discover Movies</h2>
            <p className="mt-2 text-gray-600">
              Discover popular movies, top-rated movies, and upcoming movies. Browse through
              different genres, watch trailers, and read reviews. Stay up-to-date with the latest
              movie releases and get recommendations based on your interests.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
