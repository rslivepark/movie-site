import React from 'react';
import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';

export default function LoadingSpinner() {
  return (
    <SpinnerArea className='spinner-area'>
      <Spinner
        animation='border'
        variant='danger'
        style={{ width: '5rem', height: '5rem' }}
      />
    </SpinnerArea>
  );
}

const SpinnerArea = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
