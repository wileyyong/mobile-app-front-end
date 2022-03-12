import React, { ReactNode } from 'react';
import { FlexAlignType, View, ViewPropTypes, ViewStyle } from 'react-native';
import PropTypes from 'prop-types';

interface IVStack {
  align?: FlexAlignType;
  children: ReactNode;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  style?: ViewStyle;
}
/**
 * A vertical stack of views
 */
const VStack = ({
  children,
  style,
  justify = 'center',
  align = 'center',
}: IVStack) => {
  return (
    <View
      style={[
        {
          alignItems: align,
          flexDirection: 'column',
          justifyContent: justify,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default VStack;
