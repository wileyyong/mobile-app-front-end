import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

import { colors } from '../../theme/colors';

import AnimatedPressable from './AnimatedPressable';

/**
 * A custom button with commmon styles that can be easily customized
 */
const Button = ({ children, backgroundColor, onPress, ...props }) => {
  return (
    <AnimatedPressable
      {...props}
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor,
        },
        props.style,
      ]}
    >
      {children}
    </AnimatedPressable>
  );
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    padding: 15,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Button;
