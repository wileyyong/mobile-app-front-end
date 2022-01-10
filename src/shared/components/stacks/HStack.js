import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

/**
 * A horizontal stack of views
 */
const HStack = ({ children, style, justify = 'center', align = 'center' }) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
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

HStack.propTypes = {
  children: PropTypes.node.isRequired,
  justify: PropTypes.string,
  align: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default HStack;
