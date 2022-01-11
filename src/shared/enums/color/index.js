import PropTypes from 'prop-types';

const ColorPropShape = PropTypes.shape({
  hex: PropTypes.string.isRequired,
  toString: PropTypes.func.isRequired,
});

export const PropShape = PropTypes.oneOfType([PropTypes.string, ColorPropShape]);
