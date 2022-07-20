import React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

import { getStyleWithScale, IconPropTypes } from '../utils';

const SendIcon = ({ style, size, color, ...props }: IconPropTypes) => (
  <Svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    style={getStyleWithScale(style, size)}
    {...props}
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M7.02253 6.88313C6.48949 7.20007 5.98685 7.58795 5.528 8.0468L5.52709 8.04589C4.05629 9.5195 3.22298 11.5662 3.30575 13.706C3.33564 14.4787 2.73354 15.1292 1.96092 15.1591C1.1883 15.189 0.537734 14.5869 0.507847 13.8143C0.3523 9.7933 2.55668 6.0118 6.14245 4.17105C7.63201 3.40428 9.26789 3.02081 10.902 3.02083C11.009 3.02083 11.1271 3.02206 11.2535 3.02431L10.6192 2.38995C10.0724 1.84322 10.0724 0.956785 10.6192 0.41005C11.1659 -0.136684 12.0523 -0.136683 12.5991 0.410051L15.781 3.59203C16.3278 4.13877 16.3278 5.0252 15.781 5.57193L12.5991 8.75391C12.0523 9.30064 11.1659 9.30064 10.6192 8.75391C10.0724 8.20718 10.0724 7.32074 10.6192 6.77401L11.5609 5.83228C11.3101 5.8251 11.0842 5.82083 10.902 5.82083C10.2399 5.82082 9.57825 5.90659 8.93502 6.07816L8.93533 6.07932C8.24734 6.26366 7.60672 6.53681 7.02253 6.88313Z"
      fill="url(#paint0_linear_7274_1333)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_7274_1333"
        x1="0.500122"
        y1="0"
        x2="15.6513"
        y2="15.6817"
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

export default SendIcon;
