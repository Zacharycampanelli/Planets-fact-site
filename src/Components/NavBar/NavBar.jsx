import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import planetsData from '../../assets/data/data';
import { useMediaQuery } from '@uidotdev/usehooks';
import ChevronIcon from '../../assets/images/icon-chevron.svg';
import HamburgerIcon from '../../assets/images/icon-hamburger.svg';

function NavBar({ navToggleOpen, setNavToggleOpen}) {
  const isLargerThanMedium = useMediaQuery('only screen and (min-width: 768px)');
  const isMediumToXxl = useMediaQuery('only screen and (min-width: 768px) and (max-width: 1440px)');
  const isLargerThanXxl = useMediaQuery('only screen and (min-width: 1440px)');
  const createDot = (planet) => {
    return `dot-${planet}`;
  };

  // Determines if the navbar is toggled in smaller sizes
  const setToggleStatus = () => {
    setNavToggleOpen(prev => !prev)
  }

  // If the browser is resized to a larger size without collapsing the navbar, the navbar is auto set to collapse
  useEffect(() => {
    if (isLargerThanMedium) setNavToggleOpen(false)
  }, [isLargerThanMedium, navToggleOpen])


  return (
    <div id="xxl-nav">
      <Navbar expand="lg" expanded={isLargerThanMedium ? false : navToggleOpen} id="navbar"  onToggle={setToggleStatus}>
        <Container id="navbar-container">
          <Navbar.Brand id="title">The Planets</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            
            {' '}
            <img
              src={HamburgerIcon}
              alt="hamburger dropdown menu"
              className="hamburger-icon"
            />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" id="navbar-navv">
              {!isLargerThanMedium &&
                  <hr className="nav-border border-collapse" />
              }

              <div className="planet-list">
                {planetsData.map((planet, index) => (
                  <Nav.Item className="planet-list-item" key={index}>
                    <span>
                      {!isLargerThanMedium && <div id={createDot(planet.name.toLowerCase())}></div>}
                      <NavLink className="planet-list-item-link" onClick={setToggleStatus} to={`/${planet.name.toLowerCase()}/overview`}>
                        {planet.name}
                      </NavLink>
                    </span>
                    {!isLargerThanMedium && (
                      <img
                        src={ChevronIcon}
                        alt="chevron arrow"
                        className="planet-list-item-arrow"
                      />
                    )}
                  </Nav.Item>
                ))}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <div id="nav-border-container">
      <hr className="nav-border" />

      </div>
    </div>
  );
}

export default NavBar;
