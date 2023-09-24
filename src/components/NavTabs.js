import { Navbar, Container, Nav } from 'react-bootstrap';
import { GeneralContainer, NavContainer } from '../styles/styled.components';

function NavTabs() {
  const pathname = window.location.pathname;
  return (
    <Navbar sticky='top' bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className='px-2' style={pathname === "/" ? { background: 'black', borderRadius: '.2rem', color: 'white', borderRadius: '.2rem' } : {visibility: 'visible', color: 'white', borderRadius: '.2rem'}} href="/"><NavContainer>Bleh Seton</NavContainer></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
          >
            <NavContainer style={pathname === "/about" ? { background: 'black', borderRadius: '.2rem' } : {visibility: 'visible', borderRadius: '.2rem'}} href="/about">
              About
            </NavContainer>
            <NavContainer style={pathname === "/portfolio" ? { background: 'black', borderRadius: '.2rem' } : {visibility: 'visible', borderRadius: '.2rem'}} href="/portfolio">
              Applications
            </NavContainer>
            <NavContainer style={pathname === "/resume" ? { background: 'black', borderRadius: '.2rem' } : {visibility: 'visible', borderRadius: '.2rem'}} href="/resume">
              Knowledge
            </NavContainer>
            <NavContainer style={pathname === "/contact" ? { background: 'black', borderRadius: '.2rem' } : {visibility: 'visible', borderRadius: '.2rem'}} href="/contact">
              Contact
            </NavContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTabs;
