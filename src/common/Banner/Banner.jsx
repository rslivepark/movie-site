import React, { useState } from 'react';
import MovieModal from '../MovieModal/MovieModal';
import { Button } from 'react-bootstrap';

export default function Banner({ movie }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        style={{
          backgroundImage:
            'url(' +
            `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}` +
            ')',
        }}
        className='banner'
      >
        <div className='text-white banner-text-area px-5'>
          <h1>{movie.original_title}</h1>
          <p>{movie.overview}</p>
          <Button variant='light px-3 py-2 ' onClick={() => setShowModal(true)}>
            <span className='fs-5'>▶</span>재생
          </Button>
        </div>
      </div>

      <MovieModal
        show={showModal}
        onHide={() => setShowModal(false)}
        movie={movie}
      />
    </>
  );
}
