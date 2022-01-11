import PropTypes from 'prop-types';

export const NORMAL = Object.freeze({
  font: 'FontPrimary',
  toString: () => 'NORMAL',
});

export const NORMAL_ITALIC = Object.freeze({
  font: 'FontPrimaryItalic',
  toString: () => 'NORMAL_ITALIC',
});

export const SEMIBOLD = Object.freeze({
  font: 'FontPrimarySemiBold',
  toString: () => 'SEMIBOLD',
});

export const SEMIBOLD_ITALIC = Object.freeze({
  font: 'FontPrimarySemiBoldItalic',
  toString: () => 'SEMIBOLD_ITALIC',
});

export const BOLD = Object.freeze({
  font: 'FontPrimaryBold',
  toString: () => 'BOLD',
});

export const BOLD_ITALIC = Object.freeze({
  font: 'FontPrimaryBoldItalic',
  toString: () => 'BOLD_ITALIC',
});

export const PropShape = PropTypes.shape({
  font: PropTypes.string.isRequired,
  toString: PropTypes.func.isRequired,
});
