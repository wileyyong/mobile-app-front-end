import { StyleProp, StyleSheet, TextStyle } from 'react-native';

export type TSize =
  | 'xxs'
  | 'xs'
  | '1xs'
  | '2xs'
  | 'sm'
  | 'md'
  | '1md'
  | '2md'
  | 'slg'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | undefined;

export const getFontSize = (size: TSize) => {
  switch (size) {
    case 'xxs':
      return 12;
    case 'xs':
      return 14;
    case '1xs':
      return 16;
    case '2xs':
      return 17;
    case 'sm':
      return 18;
    case 'md':
      return 20;
    case '1md':
      return 24;
    case '2md':
      return 26;
    case 'slg':
      return 24;
    case 'lg':
      return 28;
    case 'xl':
      return 30;
    case '2xl':
      return 36;
    case '3xl':
      return 40;
    case '4xl':
      return 44;

    default:
      return 20;
  }
};

export type TWeight =
  | 'regular'
  | 'bold'
  | 'semibold'
  | 'medium'
  | 'heavy'
  | 'light'
  | 'ultralight'
  | 'thin'
  | undefined;

export const getFontWeight = (weight: TWeight) => {
  switch (weight) {
    case 'regular':
      return '400';
    case 'bold':
      return '700';
    case 'semibold':
      return '600';
    case 'medium':
      return '500';
    case 'heavy':
      return '800';
    case 'light':
      return '200';
    case 'ultralight':
      return '100';
    case 'thin':
      return '300';
    default:
      return '400';
  }
};

export type TFamily = 'title' | 'regular' | 'semibold' | 'bold' | undefined;

export const getFontFamily = (type: TFamily) => {
  switch (type) {
    case 'title':
      return 'HansonBold';
    case 'regular':
        return 'OpenSans-Regular';
    case 'semibold':
      return 'OpenSans-SemiBold';
    case 'bold':
      return 'OpenSans-Bold';
    default:
      return 'OpenSans-Regular';
  }
};

export type TText =
  | 'typography'
  | 'feature-title'
  | 'title'
  | 'subtitle'
  | 'caption'
  | 'caption-bold'
  | 'body'
  | 'body-bold'
  | 'highlight'
  | 'button'
  | 'button-small'
  | undefined;

export const getTextStyle = (style?: TText): StyleProp<TextStyle> => {
  switch (style) {
    case 'typography':
      return {
        fontFamily: getFontFamily('title'),
        fontSize: getFontSize('1md'),
        fontWeight: getFontWeight('bold'),
        textTransform: 'uppercase',
      };
    case 'feature-title':
      return {
        fontFamily: getFontFamily('title'),
        fontSize: getFontSize('1md'),
        fontWeight: getFontWeight('bold'),
        textTransform: 'capitalize',
      };
    case 'title':
      return {
        fontFamily: getFontFamily('bold'),
        fontSize: getFontSize('1md'),
        fontWeight: getFontWeight('bold'),
        textTransform: 'capitalize',
      };
    case 'subtitle':
      return {
        fontFamily: getFontFamily('semibold'),
        fontSize: getFontSize('sm'),
        fontWeight: getFontWeight('semibold'),
        textTransform: 'capitalize',
      };
    case 'caption':
      return {
        fontFamily: getFontFamily('regular'),
        fontSize: getFontSize('xs'),
        fontWeight: getFontWeight('regular'),
        textTransform: 'capitalize',
      };
    case 'caption-bold':
      return {
        fontFamily: getFontFamily('semibold'),
        fontSize: getFontSize('xs'),
        fontWeight: getFontWeight('semibold'),
        textTransform: 'capitalize',
      };
    case 'body':
      return {
        fontFamily: getFontFamily('regular'),
        fontSize: getFontSize('1xs'),
        fontWeight: getFontWeight('regular'),
      };
    case 'body-bold':
      return {
        fontFamily: getFontFamily('bold'),
        fontSize: getFontSize('1xs'),
        fontWeight: getFontWeight('bold'),
      };
    case 'highlight':
      return {
        fontFamily: getFontFamily('bold'),
        fontSize: getFontSize('1md'),
        fontWeight: getFontWeight('bold'),
        textTransform: 'uppercase',
      };
    case 'button':
      return {
        fontFamily: getFontFamily('bold'),
        fontSize: getFontSize('sm'),
        fontWeight: getFontWeight('bold'),
      };
    case 'button-small':
      return {
        fontFamily: getFontFamily('bold'),
        fontSize: getFontSize('xxs'),
        fontWeight: getFontWeight('bold'),
      };
    default:
      return {};
  }
};
