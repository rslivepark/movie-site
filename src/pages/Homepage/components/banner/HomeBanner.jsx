import React from 'react';
import './HomeBanner.style.css';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import LoadingSpinner from '../../../../common/LoadingSpinner';
import ErrorMessage from '../../../../common/ErrorMessage';

export default function HomeBanner() {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  // console.log(data);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data.results[0].poster_path})`,
      }}
      className='banner'
    >
      <div className='text-light banner-text-area'>
        <h1>{data?.results[0].title}</h1>
        <p>{data?.results[0].overview}</p>
      </div>
    </div>
  );
}
//h/kP672BfrcvUwGVvf5l0vtfOJaV0.jpg
