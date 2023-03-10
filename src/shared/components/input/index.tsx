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
  editable?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
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
  editable = true,
  onBlur,
  onFocus
}: IInput) => {
  const containerStyle = StyleSheet.flatten([
    styles.container,
    { height: getHeight(size, multiline), width: getWidth(size, multiline) },
    styleContainer,
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
          editable={editable}
          placeholderTextColor={Colors.FIFTYPERCENTWHITE}
          style={inputStyle}
          value={value}
          onChangeText={text => onChangeText(text)}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </>
    </BlurView>
  );
};

export default Input;
