import { Outlet, useParams } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import SecondaryNavBar from '../Components/SecondaryNavBar/SecondaryNavBar';
import { useState } from 'react';

const Layout = ({ children }) => {
 const [navToggleOpen, setNavToggleOpen] = useState('false')

  return (
    <div id="layout">
      <NavBar  navToggleOpen={navToggleOpen} setNavToggleOpen={setNavToggleOpen} />
      {!navToggleOpen === true &&  <SecondaryNavBar />}
      <Outlet />
    </div>
  );
};

export default Layout;
