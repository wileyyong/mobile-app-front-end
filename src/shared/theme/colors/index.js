import PropTypes from 'prop-types';

const palette = Object.freeze({
  BACKGROUND_TINT: '#00000033',
  BLACK: '#000',
  DARK_PURPLE: '#25174E',
  EIGHTYPERCENTWHITE: 'rgba(255, 255, 255, 0.8)',
  FIFTYPERCENTWHITE: 'rgba(255, 255, 255, 0.5)',
  TWENTYPERCENTWHITE: 'rgba(255, 255, 255, 0.2)',
  GRAY1: '#EBE9F0',
  GRAY2: '#DFDDE4',
  GREEN: '#4FFFC2',
  LIGHT_PURPLE: '#875CFF',
  ORANGE: '#FF9075',
  PINK: '#FF5F71',
  RED: '#DB3434',
  THIRTYPERCENTBLACK: 'rgba(0, 0, 0, 0.3)',
  SEVENTYPERCENTBLACK: 'rgba(0, 0, 0, 0.7)',
  WHITE: '#FFF',
  YELLOW: '#FFEF42',
  TRANSPARENT: 'transparent',
});

const gradients = Object.freeze({
  NEGATIVE: ['#EA378B', '#F6E74E'],
  POSITIVE: ['#9133F5', '#93EF9C'],
});

export const DARK_PURPLE = palette.DARK_PURPLE;
export const LIGHT_PURPLE = palette.LIGHT_PURPLE;
export const BLACK = palette.BLACK;
export const GRAY1 = palette.GRAY1;
export const GRAY2 = palette.GRAY2;
export const ORANGE = palette.ORANGE;
export const PINK = palette.PINK;
export const GREEN = palette.GREEN;
export const YELLOW = palette.YELLOW;
export const WHITE = palette.WHITE;
export const EIGHTYPERCENTWHITE = palette.EIGHTYPERCENTWHITE;
export const FIFTYPERCENTWHITE = palette.FIFTYPERCENTWHITE;
export const TWENTYPERCENTWHITE = palette.TWENTYPERCENTWHITE;
export const BACKGROUND_TINT = palette.BACKGROUND_TINT;
export const THIRTYPERCENTBLACK = palette.THIRTYPERCENTBLACK;
export const SEVENTYPERCENTBLACK = palette.SEVENTYPERCENTBLACK;
export const TRANSPARENT = palette.TRANSPARENT;
export const RED = palette.RED;

export const NEGATIVE_GRADIENT = gradients.NEGATIVE;
export const POSITIVE_GRADIENT = gradients.POSITIVE;

const ColorPropShape = PropTypes.shape({
  hex: PropTypes.string.isRequired,
  toString: PropTypes.func.isRequired,
});

export const PropShape = PropTypes.oneOfType([
  PropTypes.string,
  ColorPropShape,
]);
