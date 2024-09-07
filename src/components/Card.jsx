import React from "react";
import Loading from './Loading'
import { useNavigate } from "react-router-dom";

function Card({ movieData }) {
  const navigate = useNavigate();
  console.log(movieData);
  const handleClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };
  if(!movieData) {
    return <Loading/>
  }
  return (
    <div className="relative flex justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movieData.map((movie) => (
          <div
            key={movie.imdbID}
            onClick={() => handleClick(movie.imdbID)}
            className=" mt-24 max-w-xs bg-white rounded-lg cursor-pointer shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <div className="w-full h-[400px] flex items-center justify-center">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {movie.Title}
              </h2>
              <p className="text-gray-600">{movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
