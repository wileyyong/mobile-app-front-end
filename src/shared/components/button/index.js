import { Colors } from '$theme';

import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, ImageBackground } from 'react-native';

import styles from './style';
import { AnimatedPressable } from './subcomponents';
import { getWidth } from './utils';

const BACKGROUND_TEXTURE = require('$assets/metalic-texture.png');

/**
 * A custom button with commmon styles that can be easily customized
 */
const Button = ({ children, backgroundColor, onPress, size, type, disabled }) => {
  const commonStyles = { backgroundColor, opacity: disabled ? 0.7 : 1 };

  if (type === 'outline') {
    const outlinedContent = StyleSheet.flatten([styles.outlinedContent, commonStyles]);

    return (
      <AnimatedPressable disabled={disabled} style={{ width: getWidth(size) }} onPress={onPress}>
        <ImageBackground source={BACKGROUND_TEXTURE} style={styles.outlinedContainer}>
          <View style={outlinedContent}>{children}</View>
        </ImageBackground>
      </AnimatedPressable>
    );
  }

  const solidContent = StyleSheet.flatten([styles.solidButton, commonStyles, { width: getWidth(size) }]);

  return (
    <AnimatedPressable disabled={disabled} style={solidContent} onPress={onPress}>
      {children}
    </AnimatedPressable>
  );
};

Button.defaultProps = {
  backgroundColor: Colors.WHITE,
  children: null,
  disabled: false,
  onPress: () => {},
  size: 'full',
  type: 'solid',
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
  type: PropTypes.oneOf(['solid', 'outline']),
};

export default Button;
