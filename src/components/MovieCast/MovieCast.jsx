import {
  MovieCastList,
  MovieCastItem,
  ActorName,
  NoImageActor,
} from 'components/MovieCast/MovieCast.styled';
import PropTypes from 'prop-types';

export const MovieCast = ({ actors }) => {
  return (
    <MovieCastList>
      {actors.map(actor => (
        <MovieCastItem key={actor.id}>
          {actor.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w92${actor.profile_path}`}
              alt={actor.name}
            />
          ) : (
            <NoImageActor>No Image</NoImageActor>
          )}
          <ActorName>{actor.name}</ActorName>
          <p>Character: {actor.character}</p>
        </MovieCastItem>
      ))}
    </MovieCastList>
  );
};

MovieCast.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};
