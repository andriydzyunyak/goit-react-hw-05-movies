import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/api';
import { MovieCast } from 'components/MovieCast/MovieCast';

export default function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    async function fetchActorsMovie() {
      try {
        const movieActors = await API.getActorsMovie(movieId);
        Result(movieActors);
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

  return <>{actors && <MovieCast actors={actors} />}</>;
}
