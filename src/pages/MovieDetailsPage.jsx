import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import * as API from 'services/api';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovieById() {
      try {
        const movieDetails = await API.getMovieDetails(movieId);
        console.log(movieDetails);
        setMovie(movieDetails);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieById();
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
          <p>User score: {movie.popularity}</p>
          <p>Overview</p>
          <p>{movie.overview}</p>
          <p>Genres</p>
          {/* <p>{movie.genres}</p> */}
        </>
      )}
      <hr />

      {movie && (
        <>
          <p>Additional information</p>
          <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
          <br />
          <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link>
        </>
      )}
      <hr />
      <Outlet />
    </>
  );
};
