import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import planetsData from '../assets/data/data';
// import  chevron from '../assets/images/icon-chevron.svg';

function NavBar() {
  const createDot = (planet) => {
    return `dot-${planet}`
  }


  return (
    <Navbar expand="md"  id="navbar">
      <Container id="navbar-container">
        <Navbar.Brand id="title">The Planets</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"> <img src={'/src/assets/images/icon-hamburger.svg'} alt="hamburger dropdown menu" className='hamburger-icon' /></Navbar.Toggle>
        <hr id="nav-border" /> 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul className="planet-list">
              {planetsData.map((planet, index) => (
         
                <Nav.Item className='planet-list-item' key={index}>
                  <span>

                  <div id={createDot(planet.name)} ></div>
                  <Link className='planet-list-item-link' to={`/planet/${planet.name.toLowerCase()}`}>{planet.name}</Link>
                
                  </span>
                   <img src={'/src/assets/images/icon-chevron.svg'} alt="chevron arrow" className='planet-list-item-arrow' />
               </Nav.Item> 
          
              ))}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
