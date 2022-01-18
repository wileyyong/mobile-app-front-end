import { Colors } from '$theme';
import { BlurView } from '$components';

import React from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';
import { PropTypes } from 'prop-types';

import styles from './style';
import { getWidth, getHeight } from './utils';

/**
 * A custom input component.
 * For single line text inputs, the size (width) can be specified. The height will stay constant.
 * For multiline text areas, use the `multiline` prop.
 * Multiline text areas will always span the full width of the parent, but the size (height) can be adjusted.
 */
const Input = ({ value, onChangeText, placeholder, icon, size, blurType, multiline }) => {
  const containerStyle = StyleSheet.flatten([
    styles.container,
    { height: getHeight(size, multiline), width: getWidth(size, multiline) },
  ]);

  const inputStyle = StyleSheet.flatten([styles.input, multiline && styles.multiline]);
  const platformBlurType = Platform.select({
    android: blurType === 'dark' || blurType === 'light' ? blurType : 'dark',
    ios: blurType,
  });

  return (
    <BlurView blurAmount={0} blurType={platformBlurType} style={containerStyle}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <TextInput
        multiline={multiline}
        placeholder={placeholder}
        placeholderTextColor={Colors.GRAY2}
        style={inputStyle}
        value={value}
        onChangeText={(text) => onChangeText(text)}
      />
    </BlurView>
  );
};

Input.defaultProps = {
  blurType: 'light',
  icon: null,
  multiline: false,
  onChangeText: () => {},
  placeholder: '',
  size: 'full',
  value: '',
};

Input.propTypes = {
  blurType: PropTypes.string,
  icon: PropTypes.node,
  multiline: PropTypes.bool,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
  value: PropTypes.string,
};

export default Input;
