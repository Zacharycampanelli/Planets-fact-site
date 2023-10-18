import { NavLink, useParams } from 'react-router-dom';
import { useMediaQuery } from '@uidotdev/usehooks';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const SecondaryNavBar = () => {
  const isSmallerThanMedium = useMediaQuery('only screen and (max-width: 767px)');
  const params = useParams();
  const classnames = 'planet-list-item-link secondary_link';

  return (
    <Navbar id="secondary_navbar">
      <Container id='secondary_navbar_container'>
        <Nav id="secondary_navbar_nav">
          <NavLink
            index="true"
            className={({ isActive }) => (isActive ? classnames + ` active-${params.planet}` : classnames)}
            to={`/${params.planet}/overview`}
          >
            OVERVIEW
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? classnames + ` active-${params.planet}` : classnames)}
            to={`/${params.planet}/structure`}
          >
            STRUCTURE
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? classnames + ` active-${params.planet}` : classnames)}
            to={`/${params.planet}/surface`}
          >
            SURFACE
          </NavLink>
        </Nav>
      </Container>
      {isSmallerThanMedium && <hr id="sub-nav-border"/>}
    </Navbar>
  );
};

export default SecondaryNavBar;
