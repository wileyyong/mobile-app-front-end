import { Colors } from '$theme';
import { BlurView } from '$components';

import React, { ReactElement } from 'react';
import { TextInput, View, StyleSheet, Platform, ViewStyle } from 'react-native';

import styles from './style';
import { getWidth, getHeight } from './utils';

interface IInput {
  blurType?: string;
  icon?: ReactElement;
  multiline?: boolean;
  onChangeText: (text: string) => void;
  placeholder: string;
  size: 'small' | 'medium' | 'large' | 'full';
  value: string;
  reference: React.ReactNode;
  style: ViewStyle;
  styleContainer?: ViewStyle;
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
  reference,
  style,
  styleContainer,
}: IInput) => {
  console.log('styleContainer', styleContainer);
  const containerStyle = StyleSheet.flatten([
    styles.container,
    { height: getHeight(size, multiline), width: getWidth(size, multiline) },
    styleContainer,
    {
      borderTopColor: Colors.LIGHT_PURPLE,
      borderBottomColor: Colors.LIGHT_PURPLE,
      borderLeftColor: Colors.LIGHT_PURPLE,
      borderRightColor: Colors.LIGHT_PURPLE,
      borderColor: Colors.LIGHT_PURPLE,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderRadius: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.1);',
    },
  ]);

  const inputStyle = StyleSheet.flatten([
    styles.input,
    multiline && styles.multiline,
    style,
  ]);
  const platformBlurType = Platform.select({
    android: blurType === 'dark' || blurType === 'light' ? blurType : 'dark',
    ios: blurType,
  });

  return (
    <BlurView blurType={platformBlurType} style={containerStyle}>
      <>
        {icon && <View style={styles.icon}>{icon}</View>}
        <TextInput
          ref={reference}
          multiline={multiline}
          placeholder={placeholder}
          placeholderTextColor={Colors.FIFTYPERCENTWHITE}
          style={inputStyle}
          value={value}
          onChangeText={text => onChangeText(text)}
        />
      </>
    </BlurView>
  );
};

export default Input;
