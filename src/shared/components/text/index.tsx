import { Colors } from '$theme';

import React, { ReactElement } from 'react';
import { TextProps, TextStyle, StyleProp, Text as RNText } from 'react-native';
import { useTranslation } from 'react-i18next';

import {
  getFontFamily,
  getFontSize,
  getFontWeight,
  getTextStyle,
  TFamily,
  TSize,
  TText,
  TWeight,
} from './utils';

interface ITypography extends TextProps {
  text?: string | ReactElement | null;
  translationKey?: string;
  family?: TFamily;
  textSystem?: TText;
  size?: TSize;
  style?: TextStyle;
  weight?: TWeight;
  lineHeight?: number;
  textAlign?: 'center' | 'auto' | 'justify' | 'left' | 'right';
  //   variant?: 'secondary' | 'primary' | 'danger' | 'success' | 'warning' | 'tertiary';
  color?: string;
}

const Text = ({
  size = 'md',
  text,
  style = {},
  lineHeight,
  textAlign,
  weight = 'semibold',
  color = Colors.BLACK,
  family = 'regular',
  textSystem,
  translationKey,
  children,
  ...rest
}: ITypography) => {
  const { t } = useTranslation();
  return (
    <RNText
      style={[
        {
          color,
          fontSize: getFontSize(size),
          fontWeight: getFontWeight(weight),
          fontFamily: getFontFamily(family),
          lineHeight,
          textAlign,
        },
        getTextStyle(textSystem),
        style,
      ]}
      {...rest}>
      {translationKey ? t(translationKey) : text || children}
    </RNText>
  );
};

export default Text;
