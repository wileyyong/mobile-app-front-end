import { Colors, Shadow } from '$theme';
import React, { ReactElement } from 'react';
import { ActivityIndicator, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RAINBOW_GRADIENT } from 'src/shared/theme/colors';
import { AnimatedPressable } from './subcomponents';
import styles from './style';
import GradientText from '../gradient-text';
import Text from '../text';
import { getWidth } from './utils';

interface IButton {
  backgroundColor?: string;
  text?: string;
  textColor?: string;
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
  style?: ViewStyle;
  isLoading: boolean;
  buttonShadow?: boolean;
}

const ButtonBorder = ({
  children,
  backgroundColor = Colors.DARK_PURPLE,
  textColor,
  onPress,
  text,
  size = 'full',
  disabled,
  style,
  isLoading,
  buttonShadow = false,
}: IButton) => {
  let commonStyles = {
    opacity: disabled ? 0.7 : 1,
    width: getWidth(size),
    ...style,
  };
  if (buttonShadow) commonStyles = { ...commonStyles, ...Shadow.LARGE };

  return (
    <AnimatedPressable
      disabled={disabled}
      onPress={onPress}
      style={commonStyles}>
      <LinearGradient
        colors={RAINBOW_GRADIENT}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={styles.rainbowborder}>
        <View style={[styles.rainbowInner, { backgroundColor }]}>
          {isLoading ? (
            <ActivityIndicator size="large" color={Colors.DARK_PURPLE} />
          ) : children ? (
            { children }
          ) : textColor ? (
            <Text text={text} color={textColor} weight={'bold'} size={'sm'} />
          ) : (
            <GradientText text={text} weight={'bold'} size={'sm'} />
          )}
        </View>
      </LinearGradient>
    </AnimatedPressable>
  );
};

export default ButtonBorder;
