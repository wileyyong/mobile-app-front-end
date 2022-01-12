import { PropTypes } from 'prop-types';

export const NONE = Object.freeze({
  radius: 0,
  toString: () => 'NONE',
});

export const SMALL = Object.freeze({
  radius: 12,
  toString: () => 'SMALL',
});

export const MEDIUM = Object.freeze({
  radius: 16,
  toString: () => 'MEDIUM',
});

export const LARGE = Object.freeze({
  radius: 24,
  toString: () => 'LARGE',
});

export const FULL = Object.freeze({
  radius: 9999,
  toString: () => 'FULL',
});

export const PropShape = PropTypes.shape({
  radius: PropTypes.number.isRequired,
  toString: PropTypes.func.isRequired,
});
