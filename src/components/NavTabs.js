import { Fragment, useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar sticky='top' bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Bleh Seton</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/portfolio">Applications</Nav.Link>
            <Nav.Link href="/resume">Knowledge</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTabs;
