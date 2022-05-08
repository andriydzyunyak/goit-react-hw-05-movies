import {
  MovieReviewsContainer,
  AuthorReview,
  MovieReviewItem,
} from 'components/MovieReviews/MovieReviews.styled';
import PropTypes from 'prop-types';

export const MovieReviews = ({ reviews }) => {
  return (
    <MovieReviewsContainer>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <MovieReviewItem key={review.id}>
              <AuthorReview>Author: {review.author}</AuthorReview>
              <p>{review.content}</p>
            </MovieReviewItem>
          ))}
        </ul>
      )}
    </MovieReviewsContainer>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
