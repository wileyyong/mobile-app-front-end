import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, IconPropTypes, iconDefaultProps } from '../utils';

export const PolygonIcon = ({
  style,
  size,
  color,
  height,
  width,
  ...props
}: IconPropTypes) => (
  <Svg
    height={height || 14}
    style={getStyleWithScale(style, size)}
    viewBox="0 0 14 15"
    width={width || 15}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M6.0795 0.531425C6.64908 0.202578 7.35083 0.202578 7.92041 0.531425L12.5747 3.21858C13.1443 3.54742 13.4951 4.15516 13.4951 4.81285V10.1872C13.4951 10.8448 13.1443 11.4526 12.5747 11.7814L7.92041 14.4686C7.35083 14.7974 6.64908 14.7974 6.0795 14.4686L1.42522 11.7814C0.855636 11.4526 0.504761 10.8448 0.504761 10.1872V4.81285C0.504761 4.15516 0.855636 3.54742 1.42522 3.21858L6.0795 0.531425Z"
      fill={color}
    />
  </Svg>
);

PolygonIcon.defaultProps = iconDefaultProps;

export default PolygonIcon;
