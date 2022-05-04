import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/api';

export const Cast = () => {
  const { movieId } = useParams();

  const [actors, setActors] = useState(null);

  useEffect(() => {
    async function fetchActorsMovie() {
      try {
        const movieActors = await API.getActorsMovie(movieId);
        console.log(movieActors);
        Result(movieActors);
        //setActors(movieActors);
      } catch (error) {
        console.log(error);
      }
    }
    fetchActorsMovie();
  }, [movieId]);

  const Result = movieActors => {
    const actorsArray = movieActors.cast.map(
      ({ id, profile_path, name, character }) => ({
        id,
        profile_path,
        name,
        character,
      })
    );
    setActors(actorsArray);
  };

  return (
    <>
      {actors && (
        <ul>
          {actors.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w92${actor.profile_path}`}
                alt={actor.name}
              />
              <br />
              {actor.name}
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
