import { PropTypes } from 'prop-types';

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
