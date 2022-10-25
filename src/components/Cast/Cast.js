import { getMovieCredit } from 'Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InfoBox } from './Cast.styled';

const Cast = () => {
  const [actors, setActors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        setIsLoading(true);
        const { cast } = await getMovieCredit(movieId);
        setActors(cast);
      } catch (error) {
        alert('Something went wrong. Try again');
      } finally {
        setIsLoading(false);
      }
    }
    fetchCast();
  }, [movieId]);

  return (
    <InfoBox>
      {isLoading && <div>Loading...</div>}
      {actors ? (
        <ul>
          {actors.map(actor => {
            const actorPhoto = `https://image.tmdb.org/t/p/w200${actor.profile_path}`;
            return (
              <li key={actor.id}>
                <img src={actorPhoto} width="100" alt="" />
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any cast for this movie.</p>
      )}
    </InfoBox>
  );
};

export default Cast;
