import { Colors } from '$theme';
import { BlurView } from '$components';

import React, { ReactElement } from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';
import { PropTypes } from 'prop-types';

import styles from './style';
import { getWidth, getHeight } from './utils';

interface IInput {
  blurType: string;
  icon: ReactElement;
  multiline: boolean;
  onChangeText: (text: string) => {};
  placeholder: string;
  size: 'small' | 'medium' | 'large' | 'full';
  value: string;
}

/**
 * A custom input component.
 * For single line text inputs, the size (width) can be specified. The height will stay constant.
 * For multiline text areas, use the `multiline` prop.
 * Multiline text areas will always span the full width of the parent, but the size (height) can be adjusted.
 */

const Input = ({
  value,
  onChangeText,
  placeholder,
  icon,
  size,
  blurType = 'light',
  multiline = false,
}: IInput) => {
  const containerStyle = StyleSheet.flatten([
    styles.container,
    { height: getHeight(size, multiline), width: getWidth(size, multiline) },
  ]);

  const inputStyle = StyleSheet.flatten([
    styles.input,
    multiline && styles.multiline,
  ]);
  const platformBlurType = Platform.select({
    android: blurType === 'dark' || blurType === 'light' ? blurType : 'dark',
    ios: blurType,
  });

  return (
    <BlurView blurAmount={0} blurType={platformBlurType} style={containerStyle}>
      <>
        {icon && <View style={styles.icon}>{icon}</View>}
        <TextInput
          multiline={multiline}
          placeholder={placeholder}
          placeholderTextColor={Colors.GRAY2}
          style={inputStyle}
          value={value}
          onChangeText={text => onChangeText(text)}
        />
      </>
    </BlurView>
  );
};

export default Input;
