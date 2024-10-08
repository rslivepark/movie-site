import React from 'react';
import Modal from 'react-bootstrap/Modal';
import YouTube from 'react-youtube';
import { useMovieTrailerQuery } from '../../hooks/useMovieTrailer';
import LoadingSpinner from '../LoadingSpinner';
import ErrorMessage from '../ErrorMessage';
import { Alert } from 'react-bootstrap';

const MovieModal = ({ movie, ...props }) => {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const { data, isLoading, isError, error } = useMovieTrailerQuery(movie.id);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <ErrorMessage error={error} />;
  }
  const modalContent = () => {
    if (data.data.results.length === 0) {
      return (
        <Alert key='danger' variant='danger'>
          해당 영화의 영상이 없습니다.
        </Alert>
      );
    }
    return (
      <YouTube
        videoId={data.data.results[0].key}
        opts={opts}
        className='youtube-frame'
      />
    );
  };
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      contentClassName='trailer-modal'
    >
      <Modal.Header closeButton closeVariant='white'></Modal.Header>
      <Modal.Body>{modalContent()}</Modal.Body>
    </Modal>
  );
};

export default MovieModal;
