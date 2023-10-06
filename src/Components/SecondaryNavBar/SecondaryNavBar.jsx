import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useParams } from 'react-router-dom';

const SecondaryNavBar = () => {
  const params = useParams();
  console.log(params)
  return (
    <Navbar id="secondary_navbar">
    <Container>
      <Nav id="secondary_navbar_nav">
       <NavLink className="planet-list-item-link secondary_link" to={`/${params.planet}/overview`}>Overview</NavLink>
      <NavLink className="planet-list-item-link secondary_link" to={`/${params.planet}}/structure`}>Structure</NavLink> 
      <NavLink className="planet-list-item-link secondary_link" to={`/${params.planet}/surface`}>Surface</NavLink>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default SecondaryNavBar
