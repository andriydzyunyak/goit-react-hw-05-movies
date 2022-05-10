import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Container } from '../Container.styled';

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  function handleSubmit(event) {
    event.preventDefault();
    setSearchParams({ query: event.target.elements.query.value });
  }

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchSearchMovies() {
      try {
        const searchMovies = await API.searchMovies(query);
        searchResult(searchMovies);
      } catch (error) {
        console.log(error);
      }
    }
    if (query) {
      fetchSearchMovies();
    }
  }, [query]);

  const searchResult = searchMovies => {
    const searchMoviesArray = searchMovies.results.map(({ id, title }) => ({
      id,
      title,
    }));
    setMovies(searchMoviesArray);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input name="query" type="text" autoComplete="off" autoFocus />
        <button type="submit">Search</button>
      </form>
      {movies && <MoviesList movies={movies} />}
    </Container>
  );
}
