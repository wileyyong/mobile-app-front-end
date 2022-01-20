import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, iconPropTypes, iconDefaultProps } from '../utils';

export const PauseIcon = ({ style, size, color, ...props }) => (
  <Svg
    height={18}
    style={getStyleWithScale(style, size)}
    viewBox="0 0 512 512"
    width={18}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M76 .7C55.7 4.1 38.1 19.3 31.2 39.4l-2.7 8.1v417l2.7 8.1c6.4 18.9 21.1 32.5 40.3 37.4 7.1 1.8 11 2 41.9 2 37.9 0 42.9-.6 54.4-6.2 8.1-3.9 19.3-14.6 24-22.9 1.8-3.2 4.1-9.2 5.2-13.5 2-7.6 2-11.5 2-213.4s0-205.8-2-213.4c-1.1-4.3-3.4-10.3-5.2-13.5-4.8-8.5-16-19.1-24.1-23C156 .5 151.3 0 113 .2c-19 0-35.6.3-37 .5zM357.3 1.5C346.9 3.8 338.4 8.6 330 17c-8.7 8.6-12.2 14.7-15 25.6-2 7.6-2 11.8-2 213.4 0 201.9 0 205.8 2 213.4 1.1 4.3 3.4 10.3 5.2 13.5 4.6 8.1 15.9 18.9 24 22.9 11.4 5.6 16.4 6.2 54.4 6.2 30.7 0 34.8-.2 41.8-2 19.4-4.9 33.5-18 40.3-37.5l2.8-8v-417l-2.8-8c-6.3-18-18.1-29.8-36.7-36.8-5.2-2-7.8-2.1-43-2.4-29.1-.2-38.9.1-43.7 1.2z"
      fill={color}
    />
  </Svg>
);

PauseIcon.defaultProps = iconDefaultProps;
PauseIcon.propTypes = iconPropTypes;

export default PauseIcon;
