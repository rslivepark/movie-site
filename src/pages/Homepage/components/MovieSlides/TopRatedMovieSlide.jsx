import React from 'react';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { useTopRatedQuery } from '../../../../hooks/useTopRatedMovies';
import { responsive } from '../../../../constants/responsive';
import LoadingSpinner from '../../../../common/LoadingSpinner';
import ErrorMessage from '../../../../common/ErrorMessage';

export default function TopRatedMovieSlide() {
  const { data, isLoading, isError, error } = useTopRatedQuery();

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <ErrorMessage error={error} />;
  }
  return (
    <MovieSlider
      title='Top-Rated Movies'
      movies={data.results}
      responsive={responsive}
    />
  );
}
