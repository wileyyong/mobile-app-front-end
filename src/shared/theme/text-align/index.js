import { PropTypes } from 'prop-types';

export const LEFT = Object.freeze({
  toString: () => 'LEFT',
  unit: 'left',
});

export const CENTER = Object.freeze({
  toString: () => 'CENTER',
  unit: 'center',
});

export const JUSTIFY = Object.freeze({
  toString: () => 'JUSTIFY',
  unit: 'justify',
});

export const RIGHT = Object.freeze({
  toString: () => 'RIGHT',
  unit: 'right',
});

export const PropShape = PropTypes.shape({
  toString: PropTypes.func.isRequired,
  unit: PropTypes.string.isRequired,
});
