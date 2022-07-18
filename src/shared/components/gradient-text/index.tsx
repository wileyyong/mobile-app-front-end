import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Text as RNText, TextProps } from 'react-native';

// import MaskedView from '@react-native-community/masked-view';
import { getFontSize, getFontWeight, TSize, TWeight } from '../text/utils';

interface ITypography extends TextProps {
  text?: string | ReactElement | null;
  translationKey?: string;
  width?: string | number;
  size?: TSize;
  style?: any;
  weight?: TWeight;
  lineHeight?: number;
  textAlign?: 'center' | 'auto' | 'justify' | 'left' | 'right';
}

const GradientText = ({
  size = 'md',
  text,
  width = 50,
  style = {},
  lineHeight,
  textAlign,
  weight = 'semibold',
  translationKey,
  children,
  ...rest
}: ITypography) => {
  const { t } = useTranslation();

  return (
    // <MaskedView
    //   style={{}}
    //   maskElement={
    <RNText
      style={[
        {
          color: 'white',
          fontSize: getFontSize(size),
          fontWeight: getFontWeight(weight),
          lineHeight,
          textAlign,
        },
        style,
      ]}>
      {translationKey ? t(translationKey) : text || children}
    </RNText>
    // }>
    // <linearGradient></linearGradient>
    // </MaskedView>
  );
};

export default GradientText;
