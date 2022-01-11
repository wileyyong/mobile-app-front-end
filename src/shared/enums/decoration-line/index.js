import { PropTypes } from 'prop-types';

export const UNDERLINE = Object.freeze({
  toString: () => 'UNDERLINE',
  unit: 'underline',
});

export const NONE = Object.freeze({
  toString: () => 'NONE',
  unit: 'none',
});

export const PropShape = PropTypes.shape({
  toString: PropTypes.func.isRequired,
  unit: PropTypes.string.isRequired,
});
