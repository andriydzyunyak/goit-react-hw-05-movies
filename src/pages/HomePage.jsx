import { useState, useEffect } from 'react';
import * as API from 'services/api';
import { Container } from 'components/Container.styled';
import { MoviesList } from 'components/MoviesList/MoviesList';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const trendingMovies = await API.getTrandingMovies();
        Result(trendingMovies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrendingMovies();
  }, []);

  const Result = trendingMovies => {
    const moviesArray = trendingMovies.results.map(({ id, title }) => ({
      id,
      title,
    }));
    setMovies(moviesArray);
  };

  return (
    <Container>
      <h1>Trending today</h1>
      {movies && <MoviesList movies={movies} />}
    </Container>
  );
}
