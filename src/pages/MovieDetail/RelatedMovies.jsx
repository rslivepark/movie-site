import React from 'react';
import { useRelatedMoviesQuery } from '../../hooks/useRelatedMovies';
import LoadingSpinner from '../../common/LoadingSpinner';
import ErrorMessage from '../../common/ErrorMessage';
import MovieSlider from '../../common/MovieSlider/MovieSlider';
import { relatedMovieResponsive } from '../../constants/responsive';

export default function RelatedMovies({ id }) {
  const {
    data: relatedMovie,
    isError,
    error,
    isLoading,
  } = useRelatedMoviesQuery(id);

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage error={error} />;

  return (
    <MovieSlider
      title='Related Movies'
      movies={relatedMovie.results}
      responsive={relatedMovieResponsive}
    />
  );
}
