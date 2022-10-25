import { useLocation, useParams, Link } from 'react-router-dom';
import { InfoBox } from './MovieInfo.styled';
import PropTypes from 'prop-types';

export const MovieInfo = ({ data }) => {
  const location = useLocation();
  const { movieId } = useParams();

  const { genres, poster_path, title, vote_average, overview } = data;
  const genresNames = genres.map(genre => genre.name).join(` `);
  const posterUrl = `https://image.tmdb.org/t/p/w200${poster_path}`;
  const rating = vote_average.toFixed(1) * 10;

  return (
    <InfoBox>
      <img src={posterUrl} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>User Score: {rating}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genresNames}</p>
      </div>
      <div>
        Additional information
        <ul>
          <li>
            <Link
              to={`/movies/${movieId}/cast`}
              state={{ from: location.state?.from ?? '/' }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={`/movies/${movieId}/reviews`}
              state={{ from: location.state?.from ?? '/' }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </InfoBox>
  );
};

MovieInfo.propTypes = {
  data: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};
