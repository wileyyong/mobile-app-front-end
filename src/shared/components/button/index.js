import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ViewPropTypes } from 'react-native';

import Style from './style';
import { AnimatedPressable } from './subcomponents';

/**
 * A custom button with commmon styles that can be easily customized
 */
const Button = ({ children, backgroundColor, onPress, ...props }) => {
  const style = StyleSheet.flatten([Style.button, { backgroundColor }, props.style]);

  return (
    <AnimatedPressable {...props} style={style} onPress={onPress}>
      {children}
    </AnimatedPressable>
  );
};

Button.defaultProps = {
  backgroundColor: '#0000',
  children: null,
  onPress: () => {},
  style: {},
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  onPress: PropTypes.func,
  style: ViewPropTypes.style,
};

export default Button;
