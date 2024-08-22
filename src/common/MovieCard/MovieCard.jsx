import React from 'react';
import { Badge } from 'react-bootstrap';
import { FaFaceGrinStars } from 'react-icons/fa6';
import { Md18UpRating } from 'react-icons/md';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import { useNavigate } from 'react-router-dom';
import './MovieCard.style.css';

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  const { data: genreData } = useMovieGenreQuery();
  // console.log('genre', genreData);

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };

  return (
    <div
      className='movie-card'
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path})`,
      }}
      onClick={() => navigate(`/movies/${movie.id}`)}
    >
      <div className='overlay'>
        <h3>{movie.title}</h3>
        {showGenre(movie.genre_ids).map((id, index) => (
          <Badge className='movie-card_badge bg-warning' key={index}>
            {id}
          </Badge>
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
