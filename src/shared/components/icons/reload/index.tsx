import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, IconPropTypes } from '../utils';

const ReloadIcon = ({ style, size, color, ...props }: IconPropTypes) => (
  <Svg
    fill="none"
    height={24}
    style={getStyleWithScale(style, size)}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M4.63605 17.364C6.2647 18.9927 8.5147 20 11 20C15.9706 20 20 15.9706 20 11C20 6.02945 15.9706 2 11 2C8.5147 2 6.2647 3.00736 4.63605 4.63605C3.80705 5.46505 2 7.5 2 7.5M2 7.5V3M2 7.5H6.5"
      stroke={color}
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ReloadIcon;
