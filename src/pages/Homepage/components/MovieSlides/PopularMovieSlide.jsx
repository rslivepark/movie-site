import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';
import LoadingSpinner from '../../../../common/LoadingSpinner';
import ErrorMessage from '../../../../common/ErrorMessage';

export default function PopularMovieSlide() {
  const { data: popular, isLoading, error, isError } = usePopularMoviesQuery();

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div>
      <MovieSlider
        title='Popular Movies'
        movies={popular.results}
        responsive={responsive}
      />
    </div>
  );
}
