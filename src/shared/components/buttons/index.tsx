import { ImageBackground } from '$components';
import { BorderRadius, Colors, Shadow } from '$theme';

import React, { ReactElement, VoidFunctionComponent } from 'react';
import {
  StyleSheet,
  TouchableOpacityProps,
  View,
  TouchableOpacity,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';

import styles from './style';
import { AnimatedPressable } from './subcomponents';
import { getWidth } from './utils';

const BACKGROUND_TEXTURE = require('src/assets/images/rainbow.png');

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
  styleOutlineButton?: ViewStyle;
  isLoading: boolean;
  showOutlineImageBackground?: boolean;
  addButtonShadow?: boolean;
}

const Button = ({
  children,
  backgroundColor = Colors.WHITE,
  onPress,
  size = 'full',
  type = 'solid',
  disabled,
  style,
  styleOutlineButton,
  isLoading,
  showOutlineImageBackground = true,
  addButtonShadow = true,
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
        {showOutlineImageBackground ? (
          <ImageBackground
            source={BACKGROUND_TEXTURE}
            style={[styles.outlinedContainer, styleOutlineButton, addButtonShadow && Shadow.LARGE]}>
            <View style={outlinedContent}>
              {isLoading ? (
                <ActivityIndicator size="large" color={Colors.DARK_PURPLE} />
              ) : (
                children
              )}
            </View>
          </ImageBackground>
        ) : (
          <View style={[styles.outlinedContainer, styleOutlineButton, addButtonShadow && Shadow.LARGE]}>
            <View
              style={[
                {
                  width:'99.5%',
                  height:'98%',
                  borderRadius: BorderRadius.XL,
                  alignItems: 'center', 
                  justifyContent: 'center',
                  backgroundColor: Colors.WHITE
                },
              ]}>
              {isLoading ? (
                <ActivityIndicator size="large" color={Colors.DARK_PURPLE} />
              ) : (
                children
              )}
            </View>
          </View>
        )}
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
      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.DARK_PURPLE} />
      ) : (
        children
      )}
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
