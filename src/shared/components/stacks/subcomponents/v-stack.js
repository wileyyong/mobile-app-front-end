import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

/**
 * A vertical stack of views
 */
const VStack = ({ children, style, justify, align }) => {
  return (
    <View
      style={[
        {
          alignItems: align,
          flexDirection: 'column',
          justifyContent: justify,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

VStack.defaultProps = {
  align: 'center',
  justify: 'center',
  style: {},
};

VStack.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node.isRequired,
  justify: PropTypes.string,
  style: ViewPropTypes.style,
};

export default VStack;
