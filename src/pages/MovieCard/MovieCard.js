import { getMovieDetails } from 'Api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieCard = () => {
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function fetchMovie() {
      try {
        setIsLoading(true);
        const result = await getMovieDetails(movieId);
        setMovieData(result);
      } catch (error) {
        alert('Something went wrong. Try again');
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [movieId]);

  return (
    <div>
      <Link to={location.state?.from ?? '/'}>Go back</Link>
      {isLoading && <div>Loading...</div>}
      {movieData && <MovieInfo data={movieData} />}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieCard;
