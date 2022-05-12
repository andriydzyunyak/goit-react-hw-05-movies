import {
  MovieCardContainer,
  MovieCardInfo,
  MovieTitle,
  MovieTitleInfo,
} from 'components/MovieCard/MovieCard.styled';
import PropTypes from 'prop-types';

export const MovieCard = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;
  return (
    <MovieCardContainer>
      <img src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt={title} />
      <MovieCardInfo>
        <MovieTitle>
          {title} ({release_date.slice(0, 4)})
        </MovieTitle>
        <p>User score: {vote_average}%</p>
        <MovieTitleInfo>Overview</MovieTitleInfo>
        <p>{overview}</p>
        <MovieTitleInfo>Genres</MovieTitleInfo>
        <p>
          {genres.map(({ id, name }) => (
            <span key={id}> {name}</span>
          ))}
        </p>
      </MovieCardInfo>
    </MovieCardContainer>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.objectOf(
    PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
    })
  ),
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
