import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import planetData from './assets/data/data';
import Layout from './Layout/Layout';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Overview from './Pages/Overview';
import Structure from './Pages/Structure';
import Surface from './Pages/Surface';

function App() {
  return (
    <ThemeProvider breakpoints={['xs', 'sm', 'md', 'lg', 'xl', 'xxl', '2xl']} minBreakpoint="xs">
      <div className="wrapper">
        <Router>
          <Routes>
            <Route path="/" element={<Navigate replace to="/mercury/overview" />} />l{' '}
            {planetData.map((planet, index) => (
              <Route key={index} path={`:planet`} element={<Layout />}>
                <Route index path="overview" element={<Overview />} />
                <Route path="structure" element={<Structure />} />
                <Route path="surface" element={<Surface />} />
              </Route>
            ))}
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
