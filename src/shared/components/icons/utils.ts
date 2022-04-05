import { StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '$theme';

const getScale = (size: string) => {
  switch (size) {
    case 'small':
      return 0.5;
    case 'medium':
      return 1;
    case 'large':
      return 1.5;
    default:
      return 1;
  }
};

export const getStyleWithScale = (style?: ViewStyle, size?: string) => {
  return StyleSheet.flatten([
    style,
    {
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
  size?: 'small' | 'medium' | 'large';
  style?: ViewStyle;
  height?: number;
  width?: number;
};
