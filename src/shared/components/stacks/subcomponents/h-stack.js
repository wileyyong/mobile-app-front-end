import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

/**
 * A horizontal stack of views
 */
const HStack = ({ children, style, justify, align }) => {
  return (
    <View
      style={[
        {
          alignItems: align,
          flexDirection: 'row',
          justifyContent: justify,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

HStack.defaultProps = {
  align: 'center',
  justify: 'center',
  style: {},
};

HStack.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node.isRequired,
  justify: PropTypes.string,
  style: ViewPropTypes.style,
};

export default HStack;
