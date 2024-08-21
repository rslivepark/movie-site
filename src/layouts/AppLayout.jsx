import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <div>
      <Navbar expand='lg' className='bg-dark'>
        <Container fluid>
          <Navbar.Brand href='#'>
            <Link to='/'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png'
                alt='logo'
                style={{ height: '30px' }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link>
                <Link
                  to='/'
                  style={{ textDecoration: 'none' }}
                  className='text-light'
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to='/movies'
                  style={{ textDecoration: 'none' }}
                  className='text-light'
                >
                  Movie
                </Link>
              </Nav.Link>
            </Nav>
            <Form className='d-flex'>
              <Form.Control
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='outline-danger'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}
