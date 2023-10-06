import { Outlet, useParams } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import SecondaryNavBar from '../Components/SecondaryNavBar/SecondaryNavBar';

const Layout = ({ children }) => {
 

  return (
    <div id="layout">
      <NavBar />
      <SecondaryNavBar />

      <Outlet />
    </div>
  );
};

export default Layout;
