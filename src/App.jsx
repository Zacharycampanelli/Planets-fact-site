import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import planetData from './assets/data/data';
import Layout from './Layout/Layout';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

function App() {
  return (
    <ThemeProvider breakpoints={['xs', 'sm', 'md', 'lg', 'xl', 'xxl', '2xl']} minBreakpoint="xs">
      <div className="container">
        <Router>
          <Layout>
            <Routes>
              {planetData.map((planet, index) => (
                <Route key={index} path={`/${planet.name.toLowerCase()}`} element={<Layout />} />
              ))}
            </Routes>
          </Layout>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
