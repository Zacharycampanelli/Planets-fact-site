import { useEffect } from 'react';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import planetData from '../assets/data/data';
import ImageContainer from '../Components/ImageContainer/ImageContainer';
import SourceIcon from '../assets/images/icon-source.svg';
import FactBoxContainer from '../Components/FactBoxContainer/FactBoxContainer';

const Overview = () => {
  const {planet: [planet, setPlanet], stats: [stats]} = useOutletContext();
  // Fetch info on specific planet chosen
  const params = useParams();
  // let planet = '';
  useEffect(() => {
    for (let planet of planetData) {
      if (planet.name.toLowerCase() === params.planet.toLowerCase()) setPlanet(planet);
    }
  }, [planet]);



  const getPlanetWikiUrl = () => {
    return `https://en.wikipedia.org/wiki/${planet.name}_(planet)`;
  };

  return (
    <div>
      <ImageContainer>
        <img src={planet.images.planet} alt={planet.name} />
      </ImageContainer>
      <div className="planet">
        <h1 className="planet-name">{planet.name.toUpperCase()}</h1>
        <p className="planet-description">{planet.overview.content}</p>
        <p className="planet-source">
          Source:{' '}
          <Link to={getPlanetWikiUrl()} target="_blank">
            Wikipedia{' '}
          </Link>
          <img src={SourceIcon} alt="source" />
        </p>
      </div>
      <FactBoxContainer stats={stats} />
    </div>
  );
};

export default Overview;
