import React from 'react';
import PropTypes from 'prop-types';

import styles from './style';
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

export default Button;
