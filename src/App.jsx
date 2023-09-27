import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import planetData from './assets/data/data';
import Layout from './Layout/Layout';
function App() {
  return (
    <Router>
      <Routes>
        {planetData.map((planet, index) => (
          <Route key={index} path={`/${planet.name.toLowerCase()}`} element={<Layout />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
