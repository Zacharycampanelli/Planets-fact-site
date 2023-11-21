import { useEffect } from 'react';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import { useMediaQuery } from '@uidotdev/usehooks';
import FactBoxContainer from '../Components/FactBoxContainer/FactBoxContainer';
import ImageContainer from '../Components/ImageContainer/ImageContainer';
import SecondaryNavBar from '../Components/SecondaryNavBar/SecondaryNavBar';
import SourceIcon from '../assets/images/icon-source.svg';
import planetData from '../assets/data/data';
import getOverviewImageByKey from '../Utils/getOverviewImageByKey';
import getSurfaceImageByKey from '../Utils/getSurfaceImageByKey';
import getStructureImageByKey from '../Utils/getStructureImageByKey';
const ContentPage = ({ pageType }) => {
  const {
    planet: [planet, setPlanet],
    stats: [stats],
  } = useOutletContext();

  const isLargerThanMedium = useMediaQuery('only screen and (min-width: 768px)');

  // Fetch info on specific planet chosen
  const params = useParams();
  // Retrieves data for specific planet on page change
  useEffect(() => {
    for (let planet of planetData) {
      console.log(planet)
      if (planet.name.toLowerCase() === params.planet.toLowerCase()) setPlanet(planet);
    }
  }, [planet]);

  let selectedImage = '';
  let imageId = ''

  let imageName = `${planet.name}Image`;
  let urlLinkName = '';
  switch (pageType) {
    case 'surface':
      selectedImage = getSurfaceImageByKey(imageName);
      urlLinkName = 'geology';
      imageId="surface_img"
      break;
    case 'structure':
      selectedImage = getStructureImageByKey(imageName);
      urlLinkName = 'structure';
      break;
    case 'overview':
      selectedImage = getOverviewImageByKey(imageName);
      urlLinkName = 'overview';
      break;
  }

  return (
    <>
      <div id="desktop-container">
        <ImageContainer>
          <img src={selectedImage} alt={planet.name} id={imageId}/>
        </ImageContainer>
        <div className="planet">
          <div className="planet-info">
            <h1 className="planet-name">{planet.name.toUpperCase()}</h1>
            <p className="planet-description">{pageType === 'overview' ? planet.overview.content : pageType === 'structure' ? planet.structure.content : pageType === 'surface' ? planet.geology.content : null }</p>
            <p className="planet-source">
              Source:{' '}
              <Link to={`planet.${urlLinkName}.source`} target="_blank">
                Wikipedia{' '}
              </Link>
              <img src={SourceIcon} alt="source"  />
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

export default ContentPage;
