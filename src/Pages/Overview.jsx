import { useEffect } from 'react';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import { useMediaQuery } from '@uidotdev/usehooks';
import ImageContainer from '../Components/ImageContainer/ImageContainer';
import FactBoxContainer from '../Components/FactBoxContainer/FactBoxContainer';
import SecondaryNavBar from '../Components/SecondaryNavBar/SecondaryNavBar';
import SourceIcon from '../assets/images/icon-source.svg';
import planetData from '../assets/data/data';
import getImageByKey from '../Utils/getImageByKey';
import MercuryImage from '../assets/images/planet-mercury.svg'

const Overview = () => {
  const {
    planet: [planet, setPlanet],
    stats: [stats],
  } = useOutletContext();
  console.log(planet.name)
  const isLargerThanMedium = useMediaQuery('only screen and (min-width: 768px)');

  // Fetch info on specific planet chosen
  const params = useParams();
  let selectedImage = '';
  // Retrieves data for specific planet on page change
  useEffect(() => {
    for (let planet of planetData) {
      if (planet.name.toLowerCase() === params.planet.toLowerCase()) setPlanet(planet);
    }
  }, [planet]);

  // useEffect(() => {
    let imageName = `${planet.name}Image`;
    selectedImage = getImageByKey(imageName)
  // }, [])
console.log(selectedImage)


  return (
    <>
      <div id="desktop-container">
        <ImageContainer>
          <img src={selectedImage} alt={planet.name} />
        </ImageContainer>
        <div className="planet">
          <div className="planet-info">
            <h1 className="planet-name">{planet.name}</h1>
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
      </div>
      <FactBoxContainer stats={stats} />
    </>
  );
};

export default Overview;
