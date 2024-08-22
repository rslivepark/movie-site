import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function AppLayout() {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const searchByKeyword = (e) => {
    e.preventDefault();
    // 키워드를 url에 포함시키기
    navigate(`movies?q=${keyword}`);
    setKeyword('');
  };

  return (
    <div>
      <Navbar
        expand='lg'
        className='px-5 bg-black applayout-navbar'
        data-bs-theme='dark'
      >
        <Link to={'/'}>
          <Navbar.Brand className='me-4'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png'
              alt='logo'
              width={93}
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link
              to='/'
              className='text-white me-4 link-offset-2 link-underline link-underline-opacity-0 mb-2'
            >
              Home
            </Link>
            <Link
              to='/movies'
              className='text-white link-offset-2 link-underline link-underline-opacity-0 mb-2'
            >
              Movies
            </Link>
          </Nav>
          <Form className='d-flex' onSubmit={searchByKeyword}>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
            />
            <Button variant='outline-danger' type='submit'>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
}
//
