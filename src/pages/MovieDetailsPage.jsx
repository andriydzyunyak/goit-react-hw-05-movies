import { lazy, useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Routes, Route } from 'react-router-dom';
import * as API from 'services/api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { BackLink } from 'components/BackLink/BackLink';
import { MovieAdditionalInfo } from 'components/MovieAdditionalInfo/MovieAdditionalInfo';

const Cast = lazy(() => import('pages/Cast'));
const Reviews = lazy(() => import('pages/Reviews'));

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovieById() {
      try {
        const {
          title,
          poster_path,
          release_date,
          vote_average,
          overview,
          genres,
        } = await API.getMovieDetails(movieId);

        setMovie({
          genres,
          poster_path,
          title,
          release_date,
          vote_average,
          overview,
        });
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
      <Suspense>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </>
  );
}
