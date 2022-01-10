import React from 'react';
import PropTypes from 'prop-types';
import { Text as RNText } from 'react-native';

import { colors } from '../../theme/colors';

import { getFontSize, getFontWeight } from './utils';

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
          color: color || colors.BLACK,
        },
        style,
      ]}
    >
      {children}
    </RNText>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  weight: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Text;
