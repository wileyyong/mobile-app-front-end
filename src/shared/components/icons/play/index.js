import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, iconPropTypes, iconDefaultProps } from '../utils';

export const PlayIcon = ({ style, size, color, ...props }) => (
  <Svg
    height={18}
    style={getStyleWithScale(style, size)}
    viewBox="0 0 512 512"
    width={18}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M52.5.9C39.7 4.2 30.8 14.5 28 29c-1.4 7.3-1.4 446.7 0 454 2.3 12.3 8.8 21.1 18.9 25.9 7.5 3.5 20.6 3.6 29.2.2 3.2-1.2 23.9-12.6 46-25.3 143.7-82.2 330.6-190.2 342.6-198 13.4-8.6 19.8-18.5 19.7-30.3-.1-10.7-5.1-19.4-15.8-27-20.4-14.4-376-218.8-392-225.3C70.3.6 57.9-.6 52.5.9z"
      fill={color}
    />
  </Svg>
);

PlayIcon.defaultProps = iconDefaultProps;
PlayIcon.propTypes = iconPropTypes;

export default PlayIcon;
