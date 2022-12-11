import { Fragment, useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

import Profile from './Profile';


const styles = {
  bleh: {
    textAlign: 'right',
    margin: '0px 200px 0px 0px'
  }
}


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar sticky='top' bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Bleh Seton</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="justify-content-end me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2">Applications</Nav.Link>
            <Nav.Link href="#action2">Knowledge</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTabs;
