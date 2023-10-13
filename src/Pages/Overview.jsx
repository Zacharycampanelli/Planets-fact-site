import { useEffect } from 'react';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import planetData from '../assets/data/data';
import ImageContainer from '../Components/ImageContainer/ImageContainer';
import SourceIcon from '../assets/images/icon-source.svg';
import FactBoxContainer from '../Components/FactBoxContainer/FactBoxContainer';
import { useMediaQuery } from '@uidotdev/usehooks';
import SecondaryNavBar from '../Components/SecondaryNavBar/SecondaryNavBar';
const Overview = () => {
  const {
    planet: [planet, setPlanet],
    stats: [stats],
  } = useOutletContext();
  const isLargerThanMedium = useMediaQuery('only screen and (min-width: 768px)');

  // Fetch info on specific planet chosen
  const params = useParams();
  // let planet = '';
  useEffect(() => {
    for (let planet of planetData) {
      if (planet.name.toLowerCase() === params.planet.toLowerCase()) setPlanet(planet);
    }
  }, [planet]);

  return (
    <>
      <ImageContainer>
        <img src={planet.images.planet} alt={planet.name} />
      </ImageContainer>
      <div className="planet">
        <div className="planet-info">

        <h1 className="planet-name">{planet.name.toUpperCase()}</h1>
        <p className="planet-description">{planet.overview.content}</p>
        <p className="planet-source">
          Source:{' '}
          <Link to={planet.overview.source} target="_blank">
            Wikipedia{' '}
          </Link>
          <img src={SourceIcon} alt="source" />
        </p>
        </div>
        {isLargerThanMedium && (
          <div id="bodyNav">
            <SecondaryNavBar />
          </div>
        )}
      </div>
      <FactBoxContainer stats={stats} />
    </>
  );
};

export default Overview;
