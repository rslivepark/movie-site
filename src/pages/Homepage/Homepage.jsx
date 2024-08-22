import React, { useEffect, useState } from 'react';

import HomeBanner from './components/banner/HomeBanner';
import PopularMovieSlide from './components/MovieSlides/PopularMovieSlide';
import TopRatedMovieSlide from './components/MovieSlides/TopRatedMovieSlide';
import UpcomingMovieSlide from './components/MovieSlides/UpcomingMovieSlide';

export default function Homepage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the threshold as needed
    };

    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <div>
      <HomeBanner />
      <div className={isMobile ? 'px-3' : 'px-5'}>
        <PopularMovieSlide />
        <TopRatedMovieSlide />
        <UpcomingMovieSlide />
      </div>
    </div>
  );
}

//1. 배너만들기 => popular movie[0] 보여주기
//2. popular movie
//3. toprated movie
//4. upcoming movie
