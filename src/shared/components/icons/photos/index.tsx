import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, iconPropTypes, iconDefaultProps } from '../utils';

const PhotosIcon = ({ style, size, color, ...props }) => (
  <Svg
    fill="none"
    height={20}
    style={getStyleWithScale(style, size)}
    width={20}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M20 14V2c0-1.1-.9-2-2-2H6C4.9 0 4 .9 4 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2ZM9.4 10.53l1.63 2.18 2.58-3.22a.5.5 0 0 1 .78 0l2.96 3.7c.26.33.03.81-.39.81H7a.5.5 0 0 1-.4-.8l2-2.67c.2-.26.6-.26.8 0ZM0 5v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1-.45-1-1V5c0-.55-.45-1-1-1s-1 .45-1 1Z"
      fill={color}
    />
  </Svg>
);

PhotosIcon.defaultProps = iconDefaultProps;
PhotosIcon.propTypes = iconPropTypes;

export default PhotosIcon;
