import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import planetData from './assets/data/data';
import Layout from './Layout/Layout';
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {planetData.map((planet, index) => (
            <Route key={index} path={`/${planet.name.toLowerCase()}`} element={<Layout />} />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
