import { useLocation } from 'react-router-dom';
import {
  MoviesListContainer,
  LinkItem,
} from 'components/MoviesList/MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <MoviesListContainer>
      {movies.map(movie => (
        <li key={movie.id}>
          <LinkItem to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </LinkItem>
        </li>
      ))}
    </MoviesListContainer>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
