import React from 'react';
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from 'react-native-svg';

import { getStyleWithScale, IconPropTypes } from '../utils';

const PozProgressIcon = ({ style, size, color, ...props }: IconPropTypes) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height={33}
    width={32}
    viewBox="0 0 32 33"
    style={getStyleWithScale(style, size)}
    fill="none"
    {...props}>
    <Path
      d="M0 16.5C0 7.66344 7.16344 0.5 16 0.5C24.8366 0.5 32 7.66344 32 16.5C32 25.3366 24.8366 32.5 16 32.5C7.16344 32.5 0 25.3366 0 16.5Z"
      fill={color || '#DFD4FF'}
      fillOpacity="0.08"
    />
    <Path
      d="M16 1.66602C19.1677 1.66602 22.2541 2.66884 24.8168 4.53076C27.3795 6.39268 29.287 9.01811 30.2658 12.0308"
      stroke="url(#paint0_linear_7274_1783)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <G opacity="0.4">
      <Path
        d="M14.9772 8.75719C15.6101 8.39181 16.3898 8.39181 17.0227 8.75719L22.1941 11.7429C22.827 12.1083 23.2168 12.7836 23.2168 13.5143V19.4858C23.2168 20.2165 22.827 20.8918 22.1941 21.2572L17.0227 24.2429C16.3898 24.6083 15.6101 24.6083 14.9772 24.2429L9.80581 21.2572C9.17294 20.8918 8.78308 20.2165 8.78308 19.4858V13.5143C8.78308 12.7836 9.17294 12.1083 9.80581 11.7429L14.9772 8.75719Z"
        fill="url(#paint1_linear_7274_1783)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_7274_1783"
        x1="0"
        y1="0.666016"
        x2="32"
        y2="32.666"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#2AD0CA" />
        <Stop offset="0.0918579" stopColor="#7EE19B" />
        <Stop offset="0.200521" stopColor="#E1F664" />
        <Stop offset="0.398438" stopColor="#FEB0FE" />
        <Stop offset="0.622396" stopColor="#ABB3FC" />
        <Stop offset="0.809896" stopColor="#5DF7A4" />
        <Stop offset="1" stopColor="#58C4F6" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_7274_1783"
        x1="8.78308"
        y1="8.48315"
        x2="24.7287"
        y2="22.8375"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#2AD0CA" />
        <Stop offset="0.0918579" stopColor="#7EE19B" />
        <Stop offset="0.200521" stopColor="#E1F664" />
        <Stop offset="0.398438" stopColor="#FEB0FE" />
        <Stop offset="0.622396" stopColor="#ABB3FC" />
        <Stop offset="0.809896" stopColor="#5DF7A4" />
        <Stop offset="1" stopColor="#58C4F6" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default PozProgressIcon;
