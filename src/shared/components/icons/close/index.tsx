import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, IconPropTypes } from '../utils';

const CloseIcon = ({ style, size, color, ...props }: IconPropTypes) => (
  <Svg
    fill="none"
    height={22}
    style={getStyleWithScale(style, size)}
    width={22}
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM8.27772 6.72208C7.84814 6.29251 7.15166 6.29251 6.72208 6.72208C6.29251 7.15166 6.29251 7.84814 6.72208 8.27772L9.44427 10.9999L6.72208 13.7221C6.29251 14.1517 6.29251 14.8481 6.72208 15.2777C7.15166 15.7073 7.84814 15.7073 8.27772 15.2777L10.9999 12.5555L13.7221 15.2777C14.1517 15.7073 14.8481 15.7073 15.2777 15.2777C15.7073 14.8481 15.7073 14.1517 15.2777 13.7221L12.5555 10.9999L15.2777 8.27772C15.7073 7.84814 15.7073 7.15166 15.2777 6.72208C14.8481 6.29251 14.1517 6.29251 13.7221 6.72208L10.9999 9.44427L8.27772 6.72208Z"
      fill={color}
    />
  </Svg>
);

export default CloseIcon;
