import { StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '$theme';

const getScale = (size: string) => {
  switch (size) {
    case 'xs':
      return 0.4;
    case 'small':
      return 0.5;
    case 'medium':
      return 1;
    case 'large':
      return 1.5;
    case 'xlarge':
      return 2;
    case 'xxlarge':
      return 3;
    default:
      return 1;
  }
};

export const getStyleWithScale = (style?: ViewStyle, size?: string) => {
  return StyleSheet.flatten([
    style,
    {
      alignContent: 'center',
      alignSelf: 'center',
      transform: [{ scale: getScale(size) }],
    },
  ]);
};

export const iconDefaultProps = {
  color: Colors.BLACK,
  size: 'medium',
  style: {},
};

export type IconPropTypes = {
  color?: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  style?: ViewStyle;
  height?: number;
  width?: number;
};
