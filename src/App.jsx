import { BrowserRouter as Router, Route, Routes, createBrowserRouter } from 'react-router-dom';
import planetData from './assets/data/data';
import Layout from './Layout/Layout';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Overview from './Pages/Overview';
import Structure from './Pages/Structure';
import Surface from './Pages/Surface';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [

    ]
  }
])



function App() {
  return (
    <ThemeProvider breakpoints={['xs', 'sm', 'md', 'lg', 'xl', 'xxl', '2xl']} minBreakpoint="xs">
      <div className="wrapper">
        <Router>
          {/* <Layout > */}
            <Routes>
              {planetData.map((planet, index) => (
                // <Route key={index} path={`/${planet.name.toLowerCase()}`} element={<InnerLayout/>}>
                <Route key={index} path={`:planet`} element={<Layout/>}>
                  <Route path="overview" element={<Overview />} index />
                  <Route path="structure" element={<Structure />} />
                  <Route path="surface" element={<Surface />} />
                </Route>
              ))}
            </Routes>
          {/* </Layout> */}
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
