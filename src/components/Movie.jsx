import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "./Loading";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${
            import.meta.env.VITE_API_KEY
          }&i=${id}`
        );
        const data = await response.json();
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError("Movie not found");
        }
      } catch (error) {
        setError("Failed to fetch movie details");
      }
    };

    getMovie();
  }, [id]);

  if (error) {
    return (
      <h1 className="text-center text-xl font-semibold text-red-600">
        {error}
      </h1>
    );
  }

  if (!movie) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col md:flex-row p-4 md:p-8 min-h-screen   text-white">
      <div className="w-full md:w-1/3 mt-6 flex justify-center md:justify-start mb-4 md:mb-0">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full max-w-xs md:max-w-full h-auto max-h-[500px] rounded-lg shadow-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="w-full md:w-2/3 mt-4 md:mt-0 flex flex-col gap-4 justify-center px-4 md:px-12">
        <Link to="/">
          <h2 className=" font-bold underline">Back To Home</h2>
        </Link>
        <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">
          {movie.Title}
        </h1>
        <p className="text-lg md:text-xl font-semibold text-center md:text-left">
          <span className="font-bold">Year:</span> {movie.Year}
        </p>
        <div className="text-md md:text-lg w-full bg-white/10 p-4 rounded-lg shadow-lg">
          <p>"{movie.Plot}"</p>
        </div>
        <div className="text-md md:text-lg space-y-2 mt-4">
          <p>
            <span className="font-bold">🎭 Actors:</span> {movie.Actors}
          </p>
          <p>
            <span className="font-bold">🍿 Genre:</span> {movie.Genre}
          </p>
          <p>
            <span className="font-bold">📽️ Director:</span> {movie.Director}
          </p>
          <p>
            <span className="font-bold">🏆 Awards:</span> {movie.Awards}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
