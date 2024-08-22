import React from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../common/LoadingSpinner';
import ErrorMessage from '../../common/ErrorMessage';
import styled from 'styled-components';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useMovieDetailQuery } from '../../hooks/useMovieDetail';
import RelatedMovies from './RelatedMovies';
import MovieReviews from './MovieReviews';
import Banner from '../../common/Banner/Banner';

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default function MovieDetail() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useMovieDetailQuery(id);

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage error={error} />;

  return (
    <>
      <Banner movie={data?.data} />
      <Container className='pb-5'>
        <Row>
          <Col xs={12} lg={6} className='d-flex justify-content-center mt-5'>
            <img
              className='w-80'
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data.data.poster_path}`}
            />
          </Col>
          <Col xs={12} lg={6} className='mt-5'>
            <div className='d-flex mb-4'>
              {data?.data.genres.map((genre, index) => (
                <MovieBadge className='movie-badge me-2' key={index}>
                  {genre.name}
                </MovieBadge>
              ))}
            </div>
            <MovieTitle className='movie-title'>{data.data.title}</MovieTitle>
            <h3>{data.data.tagline}</h3>
            <MovieNumber className='py-4 movie-number  border-bottom border-white'>
              <span>
                <img src='/IMDB.png' width={30} className='me-1' />
                {data.data.vote_average}
              </span>
              <span>
                <img src='/people4.png' width={30} className='ms-3 me-1' />
                {data.data.popularity}
              </span>
              <span>
                {data.data.adult ? (
                  <img src={'/over18.svg'} width={30} className='ms-2' />
                ) : (
                  <img src={'/under18.svg'} width={30} className='ms-2' />
                )}
              </span>
            </MovieNumber>
            <div className='py-4 border-bottom border-white'>
              {data.data.overview}
            </div>
            <div className='py-4'>
              <div className='d-flex align-items-center mb-2'>
                <MovieDetailBadge className='movie-detail-badge me-2'>
                  Budget
                </MovieDetailBadge>
                <div>$ {numberWithCommas(data.data.budget)}</div>
              </div>

              <div className='d-flex align-items-center mb-2'>
                <MovieDetailBadge className='movie-detail-badge me-2'>
                  Revenue
                </MovieDetailBadge>
                <div>$ {numberWithCommas(data.data.revenue)}</div>
              </div>

              <div className='d-flex align-items-center mb-2'>
                <MovieDetailBadge className='movie-detail-badge me-2'>
                  Release Date
                </MovieDetailBadge>
                <div>{data.data.release_date}</div>
              </div>

              <div className='d-flex align-items-center mb-2'>
                <MovieDetailBadge className='movie-detail-badge me-2'>
                  Run time
                </MovieDetailBadge>
                <div>{data.data.runtime}분</div>
              </div>
            </div>
          </Col>
        </Row>
        <RelatedMovies id={id} />
        <MovieReviews id={id} />
      </Container>
    </>
  );
}

const MovieBadge = styled.div`
  font-size: 15px;
  background-color: red;
  padding: 6px 10px;
  border-radius: 15px;
`;
const MovieTitle = styled.h1`
  font-size: 65px;
`;
const MovieNumber = styled.div`
  font-size: 20px;
`;
const MovieDetailBadge = styled.div`
  font-size: 15px;
  background-color: red;
  width: 120px;
  padding: 6px 10px;
  border-radius: 15px;
  text-align: center;
`;
