import { Colors } from '$theme';

import { StyleSheet, ViewPropTypes } from 'react-native';
import { PropTypes } from 'prop-types';

const getScale = (size) => {
  switch (size) {
    case 'small':
      return 0.5;
    case 'medium':
      return 1;
    case 'large':
      return 1.5;
    default:
      return 1;
  }
};

export const getStyleWithScale = (style, size) => {
  return StyleSheet.flatten([
    style,
    {
      transform: [{ scale: getScale(size) }],
    },
  ]);
};

export const iconDefaultProps = {
  color: Colors.BLACK,
  size: 'medium',
  style: {},
};

export const iconPropTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  style: ViewPropTypes.style,
};
