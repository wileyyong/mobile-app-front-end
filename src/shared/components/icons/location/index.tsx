import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '$theme';

import { getStyleWithScale, IconPropTypes } from '../utils';

const LocationIcon = ({
  color = Colors.BLACK,
  size = 'medium',
  style,
  ...props
}: IconPropTypes) => {
  return (
    <Svg
      fill="none"
      height={28}
      style={getStyleWithScale(style, size)}
      width={28}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M24.239.234 1.567 10.713c-2.616 1.222-1.744 5.064 1.046 5.064h9.592v9.606c0 2.794 3.837 3.668 5.058 1.048L27.727 3.727C28.599 1.63 26.33-.64 24.239.234Z"
        fill={color}
      />
    </Svg>
  );
};

export default LocationIcon;
