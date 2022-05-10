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
      {movies.map(({ id, title }) => (
        <li key={id}>
          <LinkItem to={`/movies/${id}`} state={{ from: location }}>
            {title}
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
