import { getPopularMovies } from 'Api';
import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const { results } = await getPopularMovies();
        setMoviesData(results);
      } catch (error) {
        alert('Something went wrong. Try again');
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {moviesData && <MoviesList data={moviesData} />}
    </div>
  );
};

export default Home;
