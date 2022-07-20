import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TextProps } from 'react-native';

import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import { getFontSize, getFontWeight, TSize, TWeight } from '../text/utils';

interface ITypography extends TextProps {
  text?: string | ReactElement | null;
  translationKey?: string;
  size?: TSize;
  style?: any;
  weight?: TWeight;
  lineHeight?: number;
  textAlign?: 'center' | 'auto' | 'justify' | 'left' | 'right';
}

const GradientText = ({
  size = 'md',
  text,
  style = {},
  lineHeight,
  textAlign,
  weight = 'semibold',
  translationKey,
  children,
  ...rest
}: ITypography) => {
  const { t } = useTranslation();
  const containerStyle = StyleSheet.flatten([
    {
      fontSize: getFontSize(size),
      fontWeight: getFontWeight(weight),
      lineHeight,
      textAlign,
    },
    style,
  ]);

  return (
    <MaskedView
      maskElement={
        <Text style={containerStyle}>
          {translationKey ? t(translationKey) : text || children}
        </Text>
      }>
      <LinearGradient
        colors={[
          '#2AD0CA',
          '#7EE19B',
          '#E1F664',
          '#FEB0FE',
          '#ABB3FC',
          '#5DF7A4',
          '#58C4F6',
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <Text style={[containerStyle, { opacity: 0 }]} {...rest}>
          {translationKey ? t(translationKey) : text || children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
