import PropTypes from 'prop-types';

const palette = Object.freeze({
  BACKGROUND: '#25174E',
  BLACK: '#000',
  CAPTION: 'rgba(248, 248, 248, 0.7)',
  ELEVATION: 'rgba(248, 248, 248, 0.1)',
  ERROR: '#FF9075',
  HIGHLIGHT: '#875CFF',
  LABEL: 'rgb(248, 248, 248)',
  PINK: '#FF5F71',
  PLACEHOLDER: 'rgba(248, 248, 248, 0.5)',
  SUCCESS: '#4FFFC2',
  WARNING: '#FFEF42',
  WHITE: '#FFF',
});

const gradients = Object.freeze({
  NEGATIVE: ['#EA378B', '#F6E74E'],
  POSITIVE: ['#9133F5', '#93EF9C'],
});

export const BACKGROUND = palette.BACKGROUND;
export const BLACK = palette.BLACK;
export const CAPTION = palette.CAPTION;
export const ELEVATION = palette.ELEVATION;
export const ERROR = palette.ERROR;
export const HIGHLIGHT = palette.HIGHLIGHT;
export const LABEL = palette.LABEL;
export const PINK = palette.PINK;
export const PLACEHOLDER = palette.PLACEHOLDER;
export const SUCCESS = palette.SUCCESS;
export const WARNING = palette.WARNING;
export const WHITE = palette.WHITE;

export const NEGATIVE_GRADIENT = gradients.NEGATIVE;
export const POSITIVE_GRADIENT = gradients.POSITIVE;

const ColorPropShape = PropTypes.shape({
  hex: PropTypes.string.isRequired,
  toString: PropTypes.func.isRequired,
});

export const PropShape = PropTypes.oneOfType([PropTypes.string, ColorPropShape]);
