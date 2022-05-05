import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import * as API from 'services/api';
import { BackLink } from 'components/BackLink/BackLink';

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
      <BackLink href="/" label="Go back" />
      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
          <p>User score: {movie.popularity}</p>
          <p>Overview</p>
          <p>{movie.overview}</p>
          <p>
            Genres:
            {movie.genres.map(genre => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </p>
        </>
      )}
      <hr />

      {movie && (
        <>
          <p>Additional information</p>
          <Link to="cast">Cast</Link>
          <br />
          <Link to="reviews">Reviews</Link>
        </>
      )}
      <hr />
      <Outlet />
    </>
  );
};
