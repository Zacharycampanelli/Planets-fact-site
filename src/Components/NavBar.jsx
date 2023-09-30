import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import planetsData from '../assets/data/data';

function NavBar() {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand id="title">The Planets</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul>
              {planetsData.map((planet, index) => (
                <li key={index}>
                  {/* <Nav.Link> */}
                  <Link to={`/planet/${planet.name.toLowerCase()}`}>{planet.name}</Link>
                  {/* </Nav.Link> */}
                </li>
              ))}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
