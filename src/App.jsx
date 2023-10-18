import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Layout from './Layout/Layout';
import Overview from './Pages/Overview';
import planetData from './assets/data/data';

const Structure = lazy(() => import('./Pages/Structure'));
const Surface = lazy(() => import('./Pages/Surface'));

function App() {
  return (
    <ThemeProvider breakpoints={['xs', 'sm', 'md', 'lg', 'xl', 'xxl', '2xl']} minBreakpoint="xs">
      <div className="wrapper">
        <Router>
          <Suspense fallback={<p className="loading-text">Loading...</p>}>
            <Routes>
              <Route exact path="/" element={<Navigate to="/mercury/overview" replace />} />
              {planetData.map((planet, index) => (
                <Route key={index} path={`:planet`} element={<Layout />}>
                  <Route index path="overview" element={<Overview />} />
                  <Route path="structure" element={<Structure />} />
                  <Route path="surface" element={<Surface />} />
                </Route>
              ))}
              <Route path="*" element={<Navigate to="/mercury/overview" replace />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
