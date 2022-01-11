import React from 'react';
import PropTypes from 'prop-types';
import { Text as RNText, ViewPropTypes } from 'react-native';

import { colors } from '../../theme/colors';

import { getFontSize, getFontWeight } from './utils';

/**
 * A custom text component with customizable font styles.
 */
const Text = ({ children, weight, size, color, style }) => {
  return (
    <RNText
      style={[
        {
          color: color || colors.BLACK,
          fontSize: getFontSize(size),
          fontWeight: getFontWeight(weight),
        },
        style,
      ]}
    >
      {children}
    </RNText>
  );
};

Text.defaultProps = {
  color: '#000',
  size: 'md',
  style: {},
  weight: 'bold',
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  style: ViewPropTypes.style,
  weight: PropTypes.string,
};

export default Text;
