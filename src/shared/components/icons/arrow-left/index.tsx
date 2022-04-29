import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, IconPropTypes } from '../utils';

const ArrowLeft = ({ style, size, color, ...props }: IconPropTypes) => (
  <Svg
    fill="none"
    height={22}
    style={getStyleWithScale(style, size)}
    width={13}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M11 2L2 11L11 20"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ArrowLeft;
