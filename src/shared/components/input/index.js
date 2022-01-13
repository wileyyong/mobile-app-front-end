import { Colors } from '$theme';

import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { PropTypes } from 'prop-types';

import styles from './style';
import { getWidth } from './utils';

const Input = ({ value, onChangeText, placeholder, icon, size, blurType }) => {
  const containerStyle = StyleSheet.flatten([styles.container, { width: getWidth(size) }]);

  return (
    <BlurView blurAmount={0} blurType={blurType} style={containerStyle}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Colors.GRAY1}
        style={styles.input}
        value={value}
        onChangeText={(text) => onChangeText(text)}
      />
    </BlurView>
  );
};

Input.defaultProps = {
  blurType: 'light',
  icon: null,
  onChangeText: () => {},
  placeholder: '',
  size: 'full',
  value: '',
};

Input.propTypes = {
  blurType: PropTypes.string,
  icon: PropTypes.node,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
  value: PropTypes.string,
};

export default Input;
