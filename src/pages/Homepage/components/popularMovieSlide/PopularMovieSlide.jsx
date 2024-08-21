import React from 'react';
import {
  usePopularMoviesQuery,
  useTopRatedQuery,
  useUpcomingQuery,
} from '../../../../hooks/usePopularMovies';
import { Alert } from 'react-bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

export default function PopularMovieSlide() {
  const { data: popular, isLoading, error, isError } = usePopularMoviesQuery();
  const { data: topRated } = useTopRatedQuery();
  const { data: upcoming } = usePopularMoviesQuery();
  console.log('topRated', topRated);
  console.log('upcoming', upcoming);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider
        title='Popular Movies'
        movies={popular.results}
        responsive={responsive}
      />
      <MovieSlider
        title='Top Rated Movies'
        movies={topRated.results}
        responsive={responsive}
      />
      <MovieSlider
        title='Upcoming Movies'
        movies={upcoming.results}
        responsive={responsive}
      />
    </div>
  );
}
