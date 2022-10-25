import { getMovieReview } from 'Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InfoBox } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      try {
        setIsLoading(true);
        const { results } = await getMovieReview(movieId);
        setReviews(results);
      } catch (error) {
        alert('Something went wrong. Try again');
      } finally {
        setIsLoading(false);
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <InfoBox>
      {isLoading && <div>Loading...</div>}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </InfoBox>
  );
};

export default Reviews;
