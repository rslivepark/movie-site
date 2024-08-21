import React from 'react';
import { Badge } from 'react-bootstrap';
import './MovieCard.style.css';
import { FaFaceGrinStars } from 'react-icons/fa6';
import { Md18UpRating } from 'react-icons/md';

export default function MovieCard({ movie }) {
  return (
    <div
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path})`,
      }}
      className='movie-card'
    >
      <div className='overlay'>
        <h3>{movie.title}</h3>
        {movie.genre_ids.map((id) => (
          <Badge className='movie-card_badge'>{id}</Badge>
        ))}
        <div>
          <div>
            <span>
              <FaFaceGrinStars />
            </span>
            <span> {movie.vote_average.toFixed(2)}</span>
          </div>
          <div>
            {movie.adult ? (
              <span>
                <Md18UpRating />
              </span>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
