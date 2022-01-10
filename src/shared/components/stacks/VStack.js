import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

/**
 * A vertical stack of views
 */
const VStack = ({ children, style, justify = 'center', align = 'center' }) => {
  return (
    <View
      style={[
        {
          flexDirection: 'column',
          justifyContent: justify,
          alignItems: align,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

VStack.propTypes = {
  children: PropTypes.node.isRequired,
  justify: PropTypes.string,
  align: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default VStack;
