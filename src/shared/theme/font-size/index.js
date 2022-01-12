import { PropTypes } from 'prop-types';

export const XXS = Object.freeze({
  toString: () => 'XXS',
  unit: 10,
});

export const XS = Object.freeze({
  toString: () => 'XS',
  unit: 12,
});

export const SM = Object.freeze({
  toString: () => 'SM',
  unit: 14,
});

export const MD = Object.freeze({
  toString: () => 'MD',
  unit: 16,
});

export const TEMPORARY_MD_LG = Object.freeze({
  toString: () => 'TEMPORARY_MD_LG',
  unit: 18,
});

export const LG = Object.freeze({
  toString: () => 'LG',
  unit: 20,
});
export const XL = Object.freeze({
  toString: () => 'XL',
  unit: 26,
});
export const XXL = Object.freeze({
  toString: () => 'XXL',
  unit: 32,
});

export const PropShape = PropTypes.shape({
  toString: PropTypes.func.isRequired,
  unit: PropTypes.number.isRequired,
});
