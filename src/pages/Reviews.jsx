import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/api';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function fetchReviewsMovie() {
      try {
        const movieReviews = await API.getMoviesReviews(movieId);
        Result(movieReviews);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviewsMovie();
  }, [movieId]);

  const Result = movieReviews => {
    const reviewsArray = movieReviews.results.map(
      ({ id, author, content }) => ({
        id,
        author,
        content,
      })
    );
    setReviews(reviewsArray);
  };

  return (
    <>
      {reviews && (
        <>
          {reviews.length === 0 ? (
            <p>We don't have any reviews for this movie.</p>
          ) : (
            <ul>
              {reviews.map(review => (
                <li key={review.id}>
                  <p>Author: {review.author}</p>
                  <p>{review.content}</p>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </>
  );
}
