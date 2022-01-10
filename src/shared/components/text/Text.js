import React from 'react';
import PropTypes from 'prop-types';
import { Text as RNText } from 'react-native';

import { colors } from '../../theme/colors';

/**
 * A custom text component with customizable font styles.
 */
const Text = ({ children, weight = 'bold', size = 'md', color, style }) => {
  return (
    <RNText
      style={[
        {
          fontSize: getFontSize(size),
          fontWeight: getFontWeight(weight),
          color: color || colors.black,
        },
        style,
      ]}
    >
      {children}
    </RNText>
  );
};

const getFontSize = (size) => {
  switch (size) {
    case 'xxs':
      return 12;
    case 'xs':
      return 14;
    case 'sm':
      return 18;
    case 'md':
      return 20;
    case 'lg':
      return 28;
    case 'xl':
      return 30;
    case '2xl':
      return 36;
    case '3xl':
      return 40;
    case '4xl':
      return 44;
    default:
      return 20;
  }
};

const getFontWeight = (weight) => {
  switch (weight) {
    case 'regular':
      return '400';
    case 'bold':
      return '700';
    case 'semibold':
      return '600';
    case 'medium':
      return '500';
    case 'heavy':
      return '800';
    case 'light':
      return '200';
    case 'ultralight':
      return '100';
    case 'thin':
      return '300';
    default:
      return '400';
  }
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  weight: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Text;
