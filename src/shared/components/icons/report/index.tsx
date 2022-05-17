import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, IconPropTypes } from '../utils';

const ReportIcon = ({ style, size, color, ...props }: IconPropTypes) => (
  <Svg
    height={14}
    style={getStyleWithScale(style, size)}
    width={18}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 11 10"
    {...props}>
    <Path
      d="M6.53337 1.46703C6.53337 0.882796 6.05975 0.40918 5.47552 0.40918C4.89128 0.40918 4.41767 0.882796 4.41767 1.46703V3.91767H1.96703C1.3828 3.91767 0.90918 4.39128 0.90918 4.97552C0.90918 5.55975 1.3828 6.03337 1.96703 6.03337H4.41767V8.53315C4.41767 9.11738 4.89128 9.591 5.47552 9.591C6.05975 9.591 6.53337 9.11738 6.53337 8.53315V6.03337H9.03315C9.61738 6.03337 10.091 5.55975 10.091 4.97552C10.091 4.39128 9.61738 3.91767 9.03315 3.91767H6.53337V1.46703Z"
      fill={color}
    />
  </Svg>
);

export default ReportIcon;
