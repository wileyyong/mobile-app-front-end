import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, IconPropTypes } from '../utils';

const ArrowRight = ({ style, size, color, ...props }: IconPropTypes) => (
  <Svg
    fill="none"
    height={22}
    style={getStyleWithScale(style, size)}
    width={13}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 13 22"
    {...props}>
    <Path
      d="M2 2L11 11L2 20"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ArrowRight;
