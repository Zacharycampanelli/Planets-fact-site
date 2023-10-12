import { Link, useOutletContext } from "react-router-dom";
import FactBoxContainer from "../Components/FactBoxContainer/FactBoxContainer";
import ImageContainer from "../Components/ImageContainer/ImageContainer";
import SourceIcon from '../assets/images/icon-source.svg';
const Surface = () => {
  const {planet: [planet, setPlanet], stats: [stats]} = useOutletContext();


  return (<>
    <ImageContainer>
        <img src={planet.images.geology} alt={planet.name} />
      </ImageContainer>
      <div className="planet">
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
    <div>
      <FactBoxContainer stats={stats} />
    </div>
  </>
  )
}

export default Surface
