import React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

import { getStyleWithScale, IconPropTypes } from '../utils';

const FundIcon = ({ style, size, color, ...props }: IconPropTypes) => (
  <Svg
    width={12}
    height={21}
    viewBox="0 0 12 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={getStyleWithScale(style, size)}
    {...props}>
    <Path
      d="M11.0056 13.8938C11.0056 9.63156 3.14781 9.90989 3.14781 7.33656C3.14781 6.091 4.33947 5.48267 5.7217 5.48267C8.04614 5.48267 8.46003 6.976 9.51281 6.976C10.2584 6.976 10.6173 6.50656 10.6173 5.98045C10.6173 4.75767 8.76336 3.83211 6.98558 3.51156V2.33156C6.98558 1.97808 6.84517 1.63909 6.59522 1.38914C6.34528 1.1392 6.00628 0.998779 5.65281 0.998779C5.29933 0.998779 4.96034 1.1392 4.71039 1.38914C4.46045 1.63909 4.32003 1.97808 4.32003 2.33156V3.55322C2.3817 3.99433 0.714474 5.33878 0.714474 7.53045C0.714474 11.6243 8.57114 11.4588 8.57114 14.3343C8.57114 15.3304 7.49281 16.3266 5.7217 16.3266C3.06558 16.3266 2.18058 14.5288 1.1017 14.5288C0.57614 14.5288 0.10614 14.971 0.10614 15.6377C0.10614 16.6966 1.88114 17.971 4.3217 18.3271L4.32003 18.3354V19.6671C4.33005 20.0141 4.47491 20.3435 4.72387 20.5853C4.97283 20.8272 5.30626 20.9625 5.65336 20.9625C6.00047 20.9625 6.3339 20.8272 6.58286 20.5853C6.83181 20.3435 6.97668 20.0141 6.9867 19.6671V18.3354C6.9867 18.3199 6.97892 18.3077 6.97781 18.2938C9.17392 17.8838 11.0056 16.4521 11.0056 13.8938Z"
      fill="url(#paint0_linear_7274_677)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_7274_677"
        x1="0.10614"
        y1="0.998779"
        x2="16.8994"
        y2="10.1673"
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

export default FundIcon;
