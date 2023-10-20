import MercuryImage from '../assets/images/geology-mercury.png';
import VenusImage from '../assets/images/geology-venus.png';
import EarthImage from '../assets/images/geology-earth.png';
import MarsImage from '../assets/images/geology-mars.png';
import JupiterImage from '../assets/images/geology-jupiter.png';
import SaturnImage from '../assets/images/geology-saturn.png';
import UranusImage from '../assets/images/geology-uranus.png';
import NeptuneImage from '../assets/images/geology-neptune.png';

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

const getSurfaceImageByKey = (str) => {
  return images[str];
};

export default getSurfaceImageByKey;
