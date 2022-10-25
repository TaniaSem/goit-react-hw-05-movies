import { Link, useLocation } from 'react-router-dom';
import { ListBox } from './MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ data }) => {
  const location = useLocation();
  return (
    <ListBox>
      {data.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ListBox>
  );
};

MoviesList.propTypes = {
  moviesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
