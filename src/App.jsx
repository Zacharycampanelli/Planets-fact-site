import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Layout from './Layout/Layout';
import planetData from './assets/data/data';
import ContentPage from './Pages/ContentPage';


function App() {
  return (
    <ThemeProvider breakpoints={['xs', 'sm', 'md', 'lg', 'xl', 'xxl', '2xl']} minBreakpoint="xs">
      <div className="wrapper">
        <Router>
            <Routes>
              <Route exact path="/" element={<Navigate to="/mercury/overview" replace />} />
              {planetData.map((planet, index) => (
                <Route key={index} path={`:planet`} element={<Layout />}>
                  <Route index path="overview" element={<ContentPage pageType="overview" />} />
                  <Route path="structure" element={<ContentPage pageType="structure" />} />
                  <Route path="surface" element={<ContentPage pageType="surface" />} />
                </Route>
              ))}
              <Route path="*" element={<Navigate to="/mercury/overview" replace />} />
            </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
