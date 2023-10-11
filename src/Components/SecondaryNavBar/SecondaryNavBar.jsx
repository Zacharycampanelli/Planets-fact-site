import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
const SecondaryNavBar = () => {
  // useEffect(() => {
  //   const color = getComputedStyle(document.documentElement).getPropertyValue('--color-Mercury');
  //   console.log(`--color-logo: ${color}`);
  // }, [])
  // document.documentElement.style.setProperty('--color-mercury', 'venus');
  const isSmallerThanMedium = useMediaQuery('only screen and (max-width: 768px)');

  const params = useParams();
  console.log(params);

  const classnames = 'planet-list-item-link secondary_link';
  return (
    <Navbar id="secondary_navbar">
      <Container>
        <Nav id="secondary_navbar_nav">
          {/* <NavLink  className={({isActive}) => isActive? `active-${params.planet} ${planetclassstring}` : `${planetclassstring}` } to={`/${params.planet}/overview`}>Overview</NavLink> */}
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
