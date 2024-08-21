import React from 'react';
import Banner from './components/banner/Banner';
import PopularMovieSlide from './components/popularMovieSlide/PopularMovieSlide';

export default function Homepage() {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
    </div>
  );
}

//1. 배너만들기 => popular movie[0] 보여주기
//2. popular movie
//3. toprated movie
//4. upcoming movie
