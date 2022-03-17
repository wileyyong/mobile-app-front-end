import React, { ReactNode } from 'react';
import { FlexAlignType, View, ViewStyle } from 'react-native';
import PropTypes from 'prop-types';

interface IHStack {
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
 * A horizontal stack of views
 */
const HStack = ({
  children,
  style,
  justify = 'center',
  align = 'center',
}: IHStack) => {
  return (
    <View
      style={[
        {
          alignItems: align,
          flexDirection: 'row',
          justifyContent: justify,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default HStack;
