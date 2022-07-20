import { Colors } from '$theme';
import React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

import { getStyleWithScale, IconPropTypes } from '../utils';

const PozActivityIcon = ({ style, size, color, ...props }: IconPropTypes) => (
  <Svg
    width={32}
    height={33}
    viewBox="0 0 32 33"
    style={getStyleWithScale(style, size)}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M0 16.5C0 7.66344 7.16344 0.5 16 0.5C24.8366 0.5 32 7.66344 32 16.5C32 25.3366 24.8366 32.5 16 32.5C7.16344 32.5 0 25.3366 0 16.5Z"
      fill={color || '#DFD4FF'}
      fillOpacity="0.08"
    />
    <Path
      d="M16 1.66602C17.9698 1.66602 19.9204 2.054 21.7403 2.80782C23.5601 3.56164 25.2137 4.66654 26.6066 6.05941C27.9995 7.45229 29.1044 9.10588 29.8582 10.9258C30.612 12.7457 31 14.6962 31 16.666C31 18.6358 30.612 20.5864 29.8582 22.4063C29.1044 24.2262 27.9995 25.8797 26.6066 27.2726C25.2137 28.6655 23.5601 29.7704 21.7402 30.5242C19.9204 31.278 17.9698 31.666 16 31.666C14.0302 31.666 12.0796 31.278 10.2597 30.5242C8.43986 29.7704 6.78627 28.6655 5.39339 27.2726C4.00052 25.8797 2.89562 24.2261 2.1418 22.4063C1.38798 20.5864 0.999999 18.6358 1 16.666C1 14.6962 1.38799 12.7456 2.14181 10.9258C2.89563 9.10587 4.00052 7.45229 5.3934 6.05941C6.78628 4.66653 8.43987 3.56164 10.2598 2.80782C12.0796 2.054 14.0302 1.66601 16 1.66602L16 1.66602Z"
      stroke="url(#paint0_linear_7274_4665)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M14.9772 8.75719C15.6101 8.39181 16.3898 8.39181 17.0227 8.75719L22.1941 11.7429C22.827 12.1083 23.2168 12.7836 23.2168 13.5143V19.4858C23.2168 20.2165 22.827 20.8918 22.1941 21.2572L17.0227 24.2429C16.3898 24.6083 15.6101 24.6083 14.9772 24.2429L9.80581 21.2572C9.17294 20.8918 8.78308 20.2165 8.78308 19.4858V13.5143C8.78308 12.7836 9.17294 12.1083 9.80581 11.7429L14.9772 8.75719Z"
      fill="url(#paint1_linear_7274_4665)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_7274_4665"
        x1="0"
        y1="0.666016"
        x2="32"
        y2="32.666"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={Colors.RAINBOW_A} />
        <Stop offset="0.0918579" stopColor={Colors.RAINBOW_B} />
        <Stop offset="0.200521" stopColor={Colors.RAINBOW_C} />
        <Stop offset="0.398438" stopColor={Colors.RAINBOW_D} />
        <Stop offset="0.622396" stopColor={Colors.RAINBOW_E} />
        <Stop offset="0.809896" stopColor={Colors.RAINBOW_F} />
        <Stop offset="1" stopColor={Colors.RAINBOW_G} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_7274_4665"
        x1="8.78308"
        y1="8.48315"
        x2="24.7287"
        y2="22.8375"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={Colors.RAINBOW_A} />
        <Stop offset="0.0918579" stopColor={Colors.RAINBOW_B} />
        <Stop offset="0.200521" stopColor={Colors.RAINBOW_C} />
        <Stop offset="0.398438" stopColor={Colors.RAINBOW_D} />
        <Stop offset="0.622396" stopColor={Colors.RAINBOW_E} />
        <Stop offset="0.809896" stopColor={Colors.RAINBOW_F} />
        <Stop offset="1" stopColor={Colors.RAINBOW_G} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default PozActivityIcon;
