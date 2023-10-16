import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import SecondaryNavBar from '../Components/SecondaryNavBar/SecondaryNavBar';
import planetData from '../assets/data/data';
import { useMediaQuery } from '@uidotdev/usehooks';

const Layout = () => {
  const [planet, setPlanet] = useState(planetData[0]);
  const [stats, setStats] = useState({});
  const [navToggleOpen, setNavToggleOpen] = useState(false);
  const isSmallerThanMedium = useMediaQuery('only screen and (max-width: 767px)');

  

  useEffect(() => {setStats( {
    'Rotation Time': planet.rotation,
    'Revolution Time': planet.revolution,
    'Radius': planet.radius,
    'Average Temp.': planet.temperature,
  }) },[planet]
)

  return (
    <div id="layout">
      <NavBar navToggleOpen={navToggleOpen} setNavToggleOpen={setNavToggleOpen} />
      {!navToggleOpen === true && (
        <>
          {isSmallerThanMedium && <SecondaryNavBar />}
          <Outlet context={{planet: [planet, setPlanet], stats: [stats]}} />
        </>
      )}
    </div>
  );
};

export default Layout;
