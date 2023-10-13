import { Link, useOutletContext } from "react-router-dom";
import FactBoxContainer from "../Components/FactBoxContainer/FactBoxContainer";
import ImageContainer from "../Components/ImageContainer/ImageContainer";
import SourceIcon from '../assets/images/icon-source.svg';
import { useMediaQuery } from '@uidotdev/usehooks';

import SecondaryNavBar from '../Components/SecondaryNavBar/SecondaryNavBar';

const Structure = () => {
  const {planet: [planet, setPlanet], stats: [stats]} = useOutletContext();
  const isLargerThanMedium = useMediaQuery('only screen and (min-width: 768px)');


  return (
  <>
    <ImageContainer>
        <img src={planet.images.internal} alt={planet.name} />
      </ImageContainer>
      <div className="planet">
      <div className="planet-info">
        <h1 className="planet-name">{planet.name.toUpperCase()}</h1>
        <p className="planet-description">{planet.structure.content}</p>
        <p className="planet-source">
          Source:{' '}
          <Link to={planet.structure.source} target="_blank">
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
  )
}

export default Structure
