import React from 'react';
import { Alert } from 'react-bootstrap';

export default function ErrorMessage({ error }) {
  return (
    <Alert key='danger' variant='danger'>
      {error.message}
    </Alert>
  );
}
