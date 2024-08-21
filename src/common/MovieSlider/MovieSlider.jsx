import React from 'react';
import './MovieSlider.style.css';
import MovieCard from '../MovieCard/MovieCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function MovieSlider({ title, movies, responsive }) {
  return (
    <div>
      <h3>{title}</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass='carousel-item-padding-40-px'
        containerClass='carousel-container'
        responsive={responsive}
      >
        {movies?.map((movie, index) => (
          <MovieCard key={index} movie={movie} responsive={responsive} />
        ))}
      </Carousel>{' '}
    </div>
  );
}
