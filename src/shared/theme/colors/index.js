import PropTypes from 'prop-types';

const palette = Object.freeze({
  BACKGROUND_TINT: '#00000033',
  BLACK: '#000',
  DARK_PURPLE: '#25174E',
  EIGHTYPERCENTWHITE: 'rgba(255, 255, 255, 0.8)',
  FIFTYPERCENTWHITE: 'rgba(255, 255, 255, 0.5)',
  TWENTYPERCENTWHITE: 'rgba(255, 255, 255, 0.2)',
  TENPERCENTWHITE: 'rgba(255,255,255,0.1)',
  GRAY1: '#EBE9F0',
  GRAY2: '#DFDDE4',
  GRAY3: '#F8F8F8',
  GREEN: '#4FFFC2',
  LIGHT_PURPLE: '#875CFF',
  ORANGE: '#FF9075',
  BLUE: '#3B99FC',
  PINK: '#FF5F71',
  RED: '#DB3434',
  THIRTYPERCENTBLACK: 'rgba(0, 0, 0, 0.3)',
  SEVENTYPERCENTBLACK: 'rgba(0, 0, 0, 0.7)',
  WHITE: '#FFF',
  YELLOW: '#FFEF42',
  TRANSPARENT: 'transparent',
  SEVENTYPERCENTPURPLE: 'rgba(54, 37, 102, 0.7)',
  EIGHTHUNDREDTHSPURPLE: 'rgba(223, 212, 255, 0.08)',
  VERYLIGHTPURPLE: '#DFD4FF14',
  PURPLE: 'rgba(54, 37, 102, 1)',
  OFFWHITE: 'rgba(248, 248, 248, 1)',
  SEVENTYPERCENTOFFWHITE: 'rgba(248, 248, 248, 0.7)',
  BORDERPURPLE: 'rgba(135, 92, 255, 1)',
  RAINBOW_A: '#2AD0CA',
  RAINBOW_B: '#7EE19B',
  RAINBOW_C: '#E1F664',
  RAINBOW_D: '#FEB0FE',
  RAINBOW_E: '#ABB3FC',
  RAINBOW_F: '#5DF7A4',
  RAINBOW_G: '#58C4F6',
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
export const GRAY3 = palette.GRAY3;
export const ORANGE = palette.ORANGE;
export const PINK = palette.PINK;
export const BLUE = palette.BLUE;
export const GREEN = palette.GREEN;
export const YELLOW = palette.YELLOW;
export const WHITE = palette.WHITE;
export const EIGHTYPERCENTWHITE = palette.EIGHTYPERCENTWHITE;
export const EIGHTHUNDREDTHSPURPLE = palette.EIGHTHUNDREDTHSPURPLE;
export const FIFTYPERCENTWHITE = palette.FIFTYPERCENTWHITE;
export const TWENTYPERCENTWHITE = palette.TWENTYPERCENTWHITE;
export const BACKGROUND_TINT = palette.BACKGROUND_TINT;
export const THIRTYPERCENTBLACK = palette.THIRTYPERCENTBLACK;
export const SEVENTYPERCENTBLACK = palette.SEVENTYPERCENTBLACK;
export const TRANSPARENT = palette.TRANSPARENT;
export const RED = palette.RED;
export const SEVENTYPERCENTPURPLE = palette.SEVENTYPERCENTPURPLE;
export const TENPERCENTWHITE = palette.TENPERCENTWHITE;
export const NEGATIVE_GRADIENT = gradients.NEGATIVE;
export const POSITIVE_GRADIENT = gradients.POSITIVE;
export const PURPLE = palette.PURPLE;
export const VERYLIGHTPURPLE = palette.VERYLIGHTPURPLE;
export const BORDERPURPLE = palette.BORDERPURPLE;

export const SEVENTYPERCENTOFFWHITE = palette.SEVENTYPERCENTOFFWHITE;

export const OFFWHITE = palette.OFFWHITE;

export const RAINBOW_A = palette.RAINBOW_A;
export const RAINBOW_B = palette.RAINBOW_B;
export const RAINBOW_C = palette.RAINBOW_C;
export const RAINBOW_D = palette.RAINBOW_D;
export const RAINBOW_E = palette.RAINBOW_E;
export const RAINBOW_F = palette.RAINBOW_F;
export const RAINBOW_G = palette.RAINBOW_G;

export const RAINBOW_GRADIENT = [
  palette.RAINBOW_A,
  palette.RAINBOW_B,
  palette.RAINBOW_C,
  palette.RAINBOW_D,
  palette.RAINBOW_E,
  palette.RAINBOW_F,
  palette.RAINBOW_G,
];

const ColorPropShape = PropTypes.shape({
  hex: PropTypes.string.isRequired,
  toString: PropTypes.func.isRequired,
});

export const PropShape = PropTypes.oneOfType([
  PropTypes.string,
  ColorPropShape,
]);
