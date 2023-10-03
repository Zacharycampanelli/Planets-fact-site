import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import planetsData from '../assets/data/data';
import { useMediaQuery } from '@uidotdev/usehooks';

function NavBar() {
  const isLargerThanMedium = useMediaQuery('only screen and (min-width: 768px)');
  const isMediumToXxl = useMediaQuery('only screen and (min-width: 768px) and (max-width: 1440px)');
  const isLargerThanXxl = useMediaQuery('only screen and (min-width: 1440px)');

  const createDot = (planet) => {
    return `dot-${planet}`;
  };

  // if (size.width > 480) return <>hi</>;

  return (
    <div id="xxl-nav">
    <Navbar expand="lg" id="navbar">
      <Container id="navbar-container">
        <Navbar.Brand id="title">The Planets</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          {' '}
          <img src={'/src/assets/images/icon-hamburger.svg'} alt="hamburger dropdown menu" className="hamburger-icon" />
        </Navbar.Toggle>
        {!isLargerThanMedium && <hr id="nav-border" />}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="planet-list">
              {planetsData.map((planet, index) => (
                <Nav.Item className="planet-list-item" key={index}>
                  <span>
                    {!isLargerThanMedium && <div id={createDot(planet.name)}></div>}
                    <Link className="planet-list-item-link" to={`/planet/${planet.name.toLowerCase()}`}>
                      {planet.name}
                    </Link>
                  </span>
                  {!isLargerThanMedium && <img
                    src={'/src/assets/images/icon-chevron.svg'}
                    alt="chevron arrow"
                    className="planet-list-item-arrow"
                  />}

                </Nav.Item>
              ))}
            </div>
          </Nav>
        </Navbar.Collapse>
              {isMediumToXxl && <hr id="nav-border" />}
      </Container>
    </Navbar>
        {isLargerThanXxl && <hr id="nav-border" /> }
    </div>
  );
}

export default NavBar;
