import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import { 
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Home from '../../pages/Home';
import AboutUs from '../../pages/AboutUs';
import Contact from '../../pages/Contact';
import Jobs from '../../pages/Jobs';

const NavbarComp = () => {

  return (
    <Router>
      <div className="nav-container">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/">Assignment 9</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/AboutUs">AboutUs</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
              <Nav.Link href="/Jobs">Jobs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className='container'>
        <Routes>
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Navbar className="footer" collapseOnSelect expand="xs" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand> &copy; Copyrights | 2022</Navbar.Brand>
        </Container>
      </Navbar>
    </Router>
  )
}

export default NavbarComp;