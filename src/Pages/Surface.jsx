import { Link, useOutletContext } from 'react-router-dom';
import { useMediaQuery } from '@uidotdev/usehooks';
import FactBoxContainer from '../Components/FactBoxContainer/FactBoxContainer';
import ImageContainer from '../Components/ImageContainer/ImageContainer';
import SecondaryNavBar from '../Components/SecondaryNavBar/SecondaryNavBar';
import SourceIcon from '../assets/images/icon-source.svg';
import getSurfaceImageByKey from '../Utils/getSurfaceImageByKey';

const Surface = () => {
  const {
    planet: [planet, setPlanet],
    stats: [stats],
  } = useOutletContext();

  const isLargerThanMedium = useMediaQuery('only screen and (min-width: 768px)');

  let selectedImage = '';

  let imageName = `${planet.name}Image`;
  selectedImage = getSurfaceImageByKey(imageName);

  return (
    <>
      <div id="desktop-container">
        <ImageContainer>
          <img src={selectedImage} alt={planet.name} />
        </ImageContainer>
        <div className="planet">
          <div className="planet-info">
            <h1 className="planet-name">{planet.name.toUpperCase()}</h1>
            <p className="planet-description">{planet.geology.content}</p>
            <p className="planet-source">
              Source:{' '}
              <Link to={planet.geology.source} target="_blank">
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

export default Surface;
