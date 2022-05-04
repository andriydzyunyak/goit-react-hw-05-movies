import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as API from 'services/api';

export const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const trendingMovies = await API.getTrandingMovies();
        //console.log(trendingMovies);
        //setMovies(trendingMovies);
        Result(trendingMovies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrendingMovies();
  }, []);

  const Result = trendingMovies => {
    const moviesArray = trendingMovies.results.map(
      ({ id, original_title }) => ({
        id,
        original_title,
      })
    );
    setMovies(moviesArray);
  };

  return (
    <>
      <h1>Trending today</h1>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
