import { getSearchMovies } from 'Api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FormBox } from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [moviesData, setMoviesData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const handleChange = e => {
    e.preventDefault();
    console.log(e.target.value);
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: query });
    setQuery('');
  };

  useEffect(() => {
    if (searchQuery === '' || searchQuery === null) return;

    async function fetchByQuery() {
      try {
        setIsLoading(true);
        const { results } = await getSearchMovies(searchQuery);
        setMoviesData(results);
      } catch (error) {
        alert('Something went wrong. Try again');
      } finally {
        setIsLoading(false);
      }
    }
    fetchByQuery();
  }, [searchQuery]);

  return (
    <div>
      <FormBox onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchKey"
          value={query}
          autoComplete="off"
          autoFocus
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </FormBox>
      {isLoading && <div>Loading...</div>}
      {moviesData && <MoviesList data={moviesData} />}
    </div>
  );
};

export default Movies;
