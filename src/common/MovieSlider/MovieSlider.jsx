import React from 'react';
import './MovieSlider.style.css';
import MovieCard from '../MovieCard/MovieCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function MovieSlider({ title, movies, responsive }) {
  return (
    <div>
      <h3 className='fw-bold pt-5'>{title}</h3>
      {movies.length > 0 ? (
        <Carousel
          responsive={responsive}
          itemClass='movie-slider p-1'
          infinite={true}
          containerClass='carousel-container'
          sliderClass='sliderClass'
        >
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </Carousel>
      ) : (
        <div>0 results</div>
      )}
    </div>
  );
}
