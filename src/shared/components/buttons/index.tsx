import { ImageBackground } from '$components';
import { Colors } from '$theme';

import React, { ReactElement, VoidFunctionComponent } from 'react';
import {
  StyleSheet,
  TouchableOpacityProps,
  View,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import styles from './style';
import { AnimatedPressable } from './subcomponents';
import { getWidth } from './utils';

const BACKGROUND_TEXTURE = require('src/assets/images/metalic-texture.png');

interface IButton {
  backgroundColor?: string;
  children?: ReactElement;
  disabled?: boolean;
  onPress?: () => void;
  size?:
    | 'small'
    | 'small-plus'
    | 'medium'
    | 'medium-plus'
    | 'large'
    | 'full'
    | '90%';
  type?: 'solid' | 'outline';
  style?: ViewStyle;
}

const Button = ({
  children,
  backgroundColor = Colors.WHITE,
  onPress,
  size = 'full',
  type = 'solid',
  disabled,
  style,
}: IButton) => {
  const commonStyles = { backgroundColor, opacity: disabled ? 0.7 : 1 };

  if (type === 'outline') {
    const outlinedContent = StyleSheet.flatten([
      styles.outlinedContent,
      commonStyles,
    ]);

    return (
      <AnimatedPressable
        disabled={disabled}
        style={[{ width: getWidth(size) }, style]}
        onPress={onPress}>
        <ImageBackground
          source={BACKGROUND_TEXTURE}
          style={styles.outlinedContainer}>
          <View style={outlinedContent}>{children}</View>
        </ImageBackground>
      </AnimatedPressable>
    );
  }

  const solidContent = StyleSheet.flatten([
    styles.solidButton,
    commonStyles,
    { width: getWidth(size) },
  ]);

  return (
    <AnimatedPressable
      disabled={disabled}
      style={solidContent}
      onPress={onPress}>
      {children}
    </AnimatedPressable>
  );
};

export default Button;

interface IIconButton extends TouchableOpacityProps {
  icon: ReactElement;
  style?: ViewStyle;
}

export const IconButton = ({ icon, style, disabled, ...rest }: IIconButton) => {
  const commonStyles = { opacity: disabled ? 0.7 : 1 };

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[commonStyles, styles.iconButton, style]}
      {...rest}>
      {icon}
    </TouchableOpacity>
  );
};
