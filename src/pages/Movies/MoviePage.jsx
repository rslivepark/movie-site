import React, { useEffect, useState } from 'react';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import LoadingSpinner from '../../common/LoadingSpinner';
import ErrorMessage from '../../common/ErrorMessage';
import SortDropdown from './SortDropdown';
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';
import './MoviePage.style.css';

export default function MoviePage() {
  const [query, setQuery] = useSearchParams();
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [genre, setGenre] = useState(null);
  const keyword = query.get('q');

  const {
    data: searchData,
    isLoading,
    isError,
    error,
  } = useSearchMovieQuery({
    keyword,
    page,
  });

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
    setSort('');
    setGenre(null);
  };

  const sortMovie = () => {
    if (sort === 'asc') {
      const sortedData = [...data.results].sort(
        (a, b) => a.popularity - b.popularity
      );
      setData({ ...data, results: sortedData });
    } else {
      const sortedData = [...data.results].sort(
        (a, b) => b.popularity - a.popularity
      );
      setData({ ...data, results: sortedData });
    }
  };

  const filterMovieByGenre = () => {
    const filteredData = searchData.results.filter((movie) =>
      movie.genre_ids.includes(genre.id)
    );
    setData({ ...searchData, results: filteredData });
  };

  useEffect(() => {
    if (searchData) {
      setData(searchData);
    }
  }, [searchData]);

  useEffect(() => {
    if (sort !== '') {
      sortMovie();
    }
  }, [sort, data]); // `data`가 변경될 때 정렬을 다시 수행

  useEffect(() => {
    if (genre) {
      filterMovieByGenre();
    }
  }, [genre, searchData]); // `searchData`가 변경될 때 필터링을 다시 수행

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <ErrorMessage error={error} />;
  }
  return (
    <Container>
      <SortDropdown
        sort={sort}
        setSort={setSort}
        genre={genre}
        setGenre={setGenre}
      />
      {data?.results.length === 0 ? (
        <div>해당하는 영화가 없습니다.</div>
      ) : (
        <Row>
          {data?.results.map((movie, index) => (
            <Col lg={3} xs={6} key={index} className='movie-card-box'>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      )}
      <div className='d-flex justify-content-center my-4'>
        <ReactPaginate
          nextLabel={<MdNavigateNext />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          marginPagesDisplayed={5}
          pageCount={
            searchData?.total_pages > 100 ? 100 : searchData?.total_pages
          }
          previousLabel={<GrFormPrevious />}
          pageClassName='r-page-item'
          pageLinkClassName='r-page-link'
          previousClassName='r-page-item'
          previousLinkClassName='r-page-link'
          nextClassName='r-page-item'
          nextLinkClassName='r-page-link'
          breakLabel='...'
          breakClassName='r-page-item'
          breakLinkClassName='r-page-link'
          containerClassName='pagination'
          activeClassName='active'
          renderOnZeroPageCount={null}
          forcePage={page - 1}
        />
      </div>
    </Container>
  );
}
