import MercuryImage from '../assets/images/planet-mercury-internal.svg';
import VenusImage from '../assets/images/planet-venus-internal.svg';
import EarthImage from '../assets/images/planet-earth-internal.svg';
import MarsImage from '../assets/images/planet-mars-internal.svg';
import JupiterImage from '../assets/images/planet-jupiter-internal.svg';
import SaturnImage from '../assets/images/planet-saturn-internal.svg';
import UranusImage from '../assets/images/planet-uranus-internal.svg';
import NeptuneImage from '../assets/images/planet-neptune-internal.svg';

const images = {
  MercuryImage,
  VenusImage,
  EarthImage,
  MarsImage,
  JupiterImage,
  SaturnImage,
  UranusImage,
  NeptuneImage,
};

const getStructureImageByKey = (str) => {
  return images[str];
};

export default getStructureImageByKey;
