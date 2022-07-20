import React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

import { getStyleWithScale, IconPropTypes } from '../utils';

const PozOutIcon = ({ style, size, color, ...props }: IconPropTypes) => (
  <Svg
    width="32"
    height="33"
    viewBox="0 0 32 33"
    fill="none"
    style={getStyleWithScale(style, size)}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M0 16.5C0 7.66344 7.16344 0.5 16 0.5C24.8366 0.5 32 7.66344 32 16.5C32 25.3366 24.8366 32.5 16 32.5C7.16344 32.5 0 25.3366 0 16.5Z"
      fill={color || '#DFD4FF'}
      fillOpacity="0.08"
    />
    <Path
      d="M16 1.66602C17.9698 1.66602 19.9204 2.054 21.7403 2.80782C23.5601 3.56164 25.2137 4.66654 26.6066 6.05941C27.9995 7.45229 29.1044 9.10588 29.8582 10.9258C30.612 12.7457 31 14.6962 31 16.666C31 18.6358 30.612 20.5864 29.8582 22.4063C29.1044 24.2262 27.9995 25.8797 26.6066 27.2726C25.2137 28.6655 23.5601 29.7704 21.7402 30.5242C19.9204 31.278 17.9698 31.666 16 31.666C14.0302 31.666 12.0796 31.278 10.2597 30.5242C8.43986 29.7704 6.78627 28.6655 5.39339 27.2726C4.00052 25.8797 2.89562 24.2261 2.1418 22.4063C1.38798 20.5864 0.999999 18.6358 1 16.666C1 14.6962 1.38799 12.7456 2.14181 10.9258C2.89563 9.10587 4.00052 7.45229 5.3934 6.05941C6.78628 4.66653 8.43987 3.56164 10.2598 2.80782C12.0796 2.054 14.0302 1.66601 16 1.66602L16 1.66602Z"
      stroke="url(#paint0_linear_7274_1339)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M12.7664 16.3232C12.8768 16.3724 12.9762 16.4433 13.0586 16.5317L15.1226 18.5957V9.00107C15.1226 8.76238 15.2174 8.53346 15.3862 8.36468C15.555 8.1959 15.7839 8.10107 16.0226 8.10107C16.2613 8.10107 16.4902 8.1959 16.659 8.36468C16.8278 8.53346 16.9226 8.76238 16.9226 9.00107V18.5957L18.9866 16.5317C19.1572 16.3728 19.3828 16.2862 19.616 16.2903C19.8492 16.2944 20.0716 16.3889 20.2365 16.5538C20.4014 16.7187 20.4959 16.9412 20.5 17.1743C20.5041 17.4075 20.4176 17.6331 20.2586 17.8037L16.6586 21.4037C16.4898 21.5723 16.2611 21.6669 16.0226 21.6669C15.7841 21.6669 15.5553 21.5723 15.3866 21.4037L11.7866 17.8037C11.6981 17.7213 11.6272 17.622 11.578 17.5116C11.5288 17.4012 11.5024 17.282 11.5003 17.1612C11.4981 17.0403 11.5204 16.9203 11.5656 16.8082C11.6109 16.6962 11.6783 16.5944 11.7637 16.5089C11.8492 16.4234 11.951 16.3561 12.0631 16.3108C12.1751 16.2655 12.2952 16.2433 12.416 16.2454C12.5368 16.2476 12.656 16.274 12.7664 16.3232Z"
      fill="url(#paint1_linear_7274_1339)"
    />
    <Path
      d="M8.51664 23.0667C8.01038 23.0667 7.59998 23.4771 7.59998 23.9834C7.59998 24.4896 8.01038 24.9 8.51664 24.9H23.4833C23.9896 24.9 24.4 24.4896 24.4 23.9834C24.4 23.4771 23.9896 23.0667 23.4833 23.0667H8.51664Z"
      fill="url(#paint2_linear_7274_1339)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_7274_1339"
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
        id="paint1_linear_7274_1339"
        x1="7.59998"
        y1="8.10107"
        x2="24.3989"
        y2="24.9011"
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
        id="paint2_linear_7274_1339"
        x1="7.59998"
        y1="8.10107"
        x2="24.3989"
        y2="24.9011"
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

export default PozOutIcon;
