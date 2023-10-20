import { lazy } from 'react';
import MercuryImage from '../assets/images/planet-mercury.svg';
import VenusImage from '../assets/images/planet-venus.svg';
import EarthImage from '../assets/images/planet-earth.svg';
import MarsImage from '../assets/images/planet-mars.svg';
import JupiterImage from '../assets/images/planet-jupiter.svg';
import SaturnImage from '../assets/images/planet-saturn.svg';
import UranusImage from '../assets/images/planet-uranus.svg';
import NeptuneImage from '../assets/images/planet-neptune.svg';
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

const getImageByKey = (str) => {
  return images[str];
};

export default getImageByKey;
