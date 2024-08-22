import React from 'react';
import { useMovieReviewsQuery } from '../../hooks/useMovieReviews';
import LoadingSpinner from '../../common/LoadingSpinner';
import ErrorMessage from '../../common/ErrorMessage';
import ReviewElem from './components/ReviewElem';

export default function MovieReviews({ id }) {
  const { data: reviews, isError, error, isLoading } = useMovieReviewsQuery(id);

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage error={error} />;

  // console.log(reviews.data);

  return (
    <div>
      <h3 className='fw-bold'>Reviews</h3>
      {reviews?.data.results.length === 0 ? (
        <div className='mb-5'>리뷰가 없습니다.</div>
      ) : (
        reviews?.data.results.map((review, index) => (
          <ReviewElem review={review} key={index} />
        ))
      )}
    </div>
  );
}
