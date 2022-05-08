import {
  MovieCardContainer,
  MovieCardInfo,
  MovieTitle,
  MovieTitleInfo,
} from 'components/MovieCard/MovieCard.styled';
import PropTypes from 'prop-types';

export const MovieCard = ({ movie }) => {
  return (
    <MovieCardContainer>
      <img
        src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
        alt={movie.title}
      />
      <MovieCardInfo>
        <MovieTitle>
          {movie.title} ({movie.release_date.slice(0, 4)})
        </MovieTitle>
        <p>User score: {movie.vote_average}%</p>
        <MovieTitleInfo>Overview</MovieTitleInfo>
        <p>{movie.overview}</p>
        <MovieTitleInfo>Genres</MovieTitleInfo>
        <p>
          {movie.genres.map(genre => (
            <span key={genre.id}> {genre.name}</span>
          ))}
        </p>
      </MovieCardInfo>
    </MovieCardContainer>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
