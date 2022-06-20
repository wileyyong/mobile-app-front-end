import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, iconDefaultProps, iconPropTypes } from '../utils';

const ArrowDown = ({ height, width, color, size, style, ...props }) => {
  return (
    <Svg
      fill="none"
      height={height | 16}
      style={getStyleWithScale(style, size)}
      width={width | 28}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 16"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.30214 1.13545C1.87165 0.565934 2.79502 0.565934 3.36453 1.13545L14 11.7709L24.6355 1.13545C25.205 0.565934 26.1283 0.565934 26.6979 1.13545C27.2674 1.70496 27.2674 2.62833 26.6979 3.19784L15.0312 14.8645C14.4617 15.434 13.5383 15.434 12.9688 14.8645L1.30214 3.19784C0.732621 2.62833 0.732621 1.70496 1.30214 1.13545Z"
        fill={color}
      />
    </Svg>
  );
};

ArrowDown.defaultProps = iconDefaultProps;
ArrowDown.propTypes = iconPropTypes;

export default ArrowDown;
