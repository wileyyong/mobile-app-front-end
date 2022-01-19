import { PropTypes } from 'prop-types';
import { Platform } from 'react-native';

import Dimensions from '../dimensions';

const IDEAL_HEIGHT = 812;
const IDEAL_WIDTH = 375;

export function byHeight(value, factor = 1) {
  return value + ((value * Dimensions.height) / IDEAL_HEIGHT - value) * factor;
}

export function byWidth(value, factor = 1) {
  return value + ((value * Dimensions.width) / IDEAL_WIDTH - value) * factor;
}

export const NONE = Object.freeze({
  apply: (value) => value,
  toString: () => 'NONE',
  unit: 0,
});

export const FULL = Object.freeze({
  apply: (value) => byHeight(value),
  toString: () => 'FULL',
  unit: 1,
});

export const PARTIAL_25 = Object.freeze({
  apply: (value) => byHeight(value, 0.25),
  toString: () => 'PARTIAL_25',
  unit: 0.25,
});

export const PARTIAL_50 = Object.freeze({
  apply: (value) => byHeight(value, 0.5),
  toString: () => 'PARTIAL_50',
  unit: 0.5,
});

export const PARTIAL_75 = Object.freeze({
  apply: (value) => byHeight(value, 0.75),
  toString: () => 'PARTIAL_75',
  unit: 0.75,
});

export const PropShape = PropTypes.shape({
  apply: PropTypes.func.isRequired,
  toString: PropTypes.func.isRequired,
  unit: PropTypes.number.isRequired,
});

export const scale = (value) => {
  const { width } = Dimensions;

  let scaleValue = 1;

  switch (Platform.OS) {
    case 'android':
      if (width <= 414) {
        // Android smartphones
        scaleValue = width / 414;
      }
      break;

    case 'ios':
      switch (width) {
        // iPhone4/4S and iPhone5/5S
        case 320:
          scaleValue = 0.77;
          break;
        // iPhone6/6S
        case 375:
          scaleValue = 0.902;
          break;
        // iPhone6plus/6Splus
        case 414:
          scaleValue = 1;
          break;
        // iPad
        default:
          scaleValue = 1;
      }
      break;
    default:
      scaleValue = 1;
  }

  return Math.ceil(value * scaleValue);
};

export const scaleArray = (values) => values.map((value) => `${scale(value)}px`).join(' ');

export const scaleAbsoluteProps = (positions) =>
  Object.entries(positions)
    // eslint-disable-next-line no-unused-vars
    .filter(([_, value]) => Number.isInteger(value))
    .map(([key, value]) => `${key}: ${scale(value)}px`)
    .join(';\n');
