import React from 'react';
import LoadingSpinner from '../../../../common/LoadingSpinner';
import ErrorMessage from '../../../../common/ErrorMessage';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcoming';

export default function UpcomingMovieSlide() {
  const { data, isLoading, error, isError } = useUpcomingMoviesQuery();
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <ErrorMessage error={error} />;
  }
  return (
    <MovieSlider
      title='Upcoming Movies'
      movies={data.results}
      responsive={responsive}
    />
  );
}
