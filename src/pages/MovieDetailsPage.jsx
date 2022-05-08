import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import * as API from 'services/api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { BackLink } from 'components/BackLink/BackLink';
import { MovieAdditionalInfo } from 'components/MovieAdditionalInfo/MovieAdditionalInfo';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovieById() {
      try {
        const movieDetails = await API.getMovieDetails(movieId);
        setMovie(movieDetails);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieById();
  }, [movieId]);

  return (
    <>
      <BackLink href={location?.state?.from ?? '/'} label="Go back" />
      {movie && <MovieCard movie={movie} />}
      {movie && <MovieAdditionalInfo />}
      <Outlet />
    </>
  );
}
