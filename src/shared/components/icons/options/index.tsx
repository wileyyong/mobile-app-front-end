import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, IconPropTypes } from '../utils';

const OptionsIcon = ({ style, size, color, ...props }: IconPropTypes) => (
  <Svg
    height={14}
    style={getStyleWithScale(style, size)}
    width={18}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 6 21"
    {...props}>
    <Path
      d="M5.04171 18.6667C5.04171 17.5391 4.12762 16.625 3.00004 16.625C1.87246 16.625 0.958374 17.5391 0.958374 18.6667C0.958374 19.7942 1.87246 20.7083 3.00004 20.7083C4.12762 20.7083 5.04171 19.7942 5.04171 18.6667Z"
      fill={color}
    />
    <Path
      d="M3.00004 8.45833C4.12762 8.45833 5.04171 9.37241 5.04171 10.5C5.04171 11.6276 4.12762 12.5417 3.00004 12.5417C1.87246 12.5417 0.958374 11.6276 0.958374 10.5C0.958374 9.37241 1.87246 8.45833 3.00004 8.45833Z"
      fill={color}
    />
    <Path
      d="M3.00004 0.29166C4.12762 0.29166 5.04171 1.20575 5.04171 2.33333C5.04171 3.46091 4.12762 4.37499 3.00004 4.37499C1.87246 4.37499 0.958374 3.46091 0.958374 2.33333C0.958374 1.20575 1.87246 0.29166 3.00004 0.29166Z"
      fill={color}
    />
  </Svg>
);

export default OptionsIcon;
