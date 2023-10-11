import { Suspense, lazy } from 'react';
// import MercuryImage from '../assets/images/planet-mercury.svg';
import { Link, useParams } from 'react-router-dom';
import planetData from '../assets/data/data';
import ImageContainer from '../Components/ImageContainer/ImageContainer';
import SourceIcon from '../assets/images/icon-source.svg';
import FactBox from '../Components/FactBox/FactBox';
// const VenusImage = lazy(() => import('../assets/images/planet-venus.svg'));
// const EarthImage = lazy(() => import('../assets/images/planet-earth.svg'));
// const MarsImage = lazy(() => import('../assets/images/planet-mars.svg'));
// const JupiterImage = lazy(() => import('../assets/images/planet-jupiter.svg'));
// const SaturnImage = lazy(() => import('../assets/images/planet-saturn.svg'));
// const UranusImage = lazy(() => import('../assets/images/planet-uranus.svg'));
// const NeptuneImage = lazy(() => import('../assets/images/planet-neptune.svg'));

const Overview = () => {
  // Fetch info on specific planet chosen
  const params = useParams();
  let current;
  for (let planet of planetData) {
    if (planet.name.toLowerCase() === params.planet.toLowerCase()) current = planet;
  }

  let stats = {
    
      'Rotation Time': current.rotation,
  
      'Revolution Time': current.revolution,
    
      'Radius': current.radius,
  
      'Average Temp.': current.temperature
     }

     const getPlanetWikiUrl =  () => {
       const url =  `https://en.wikipedia.org/wiki/${current.name}_(planet)`
      return url; 
     }
  
console.log(current.name)
  let factBoxes = [];
  // for (const [key, value] of Object.entries(stats)) {
  //   console.log(key)
  //   factBoxes.push(<FactBox key={key} value={value} />);
  // } 
  // console.log(factBoxes)

  return (
    <div>
      {/* <Suspense fallback={<p>Loading...</p>}> */}
        <ImageContainer>
          <img src={current.images.planet} alt={current.name} />
        </ImageContainer>
      {/* </Suspense> */}
      <div className="planet">
        <h1 className="planet-name">{current.name.toUpperCase()}</h1>
        <p className="planet-description">{current.overview.content}</p>
        <p className="planet-source">
          Source: <Link to={getPlanetWikiUrl()} target="_blank">Wikipedia </Link>
          <img src={SourceIcon} alt="source" />
        </p>
      </div>
      <div className='fact-box'>

      <div className="facts">{Object.entries(stats).map(([name, value]) => <FactBox name={name} value={value} key={current}/> )}</div>
      </div>
    </div>
  );
};

export default Overview;
