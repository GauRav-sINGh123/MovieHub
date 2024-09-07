import React, { useState } from "react";
import Card from "./Card";

function Details() {
  const [title, setTitle] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState(null);

  const getAllMovies = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${
          import.meta.env.VITE_API_KEY
        }&s=${title}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovieData(data.Search || []);
      } else {
        setMovieData([]);
        setError(data.Error);
      }
    } catch (error) {
      setError("Failed to fetch movie data");
    }
  };

  const handleClick = () => {
    if (title.trim()) {
      getAllMovies();
    }
  };

  return (
    <div className="flex flex-col items-center px-4">
      <label
        className="mx-auto mt-20 w-full max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 bg-white shadow-2xl focus-within:border-gray-300"
        htmlFor="search-bar"
      >
        <input
          id="search-bar"
          placeholder="Search Your Favorite Movie...."
          className="px-6 py-1 w-full rounded-md flex-1 outline-none text-black bg-white placeholder:text-black"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={handleClick}
          className="w-full md:w-auto px-6 py-3 bg-black text-white rounded-xl border-black hover:bg-gray-800 transition-all"
        >
          <div className="relative">
            <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
              Search
            </span>
          </div>
        </button>
      </label>

      {movieData.length > 0 ? (
        <Card movieData={movieData} />
      ) : (
        error && <div className="text-center mt-20">No movie Found</div>
      )}
    </div>
  );
}

export default Details;
