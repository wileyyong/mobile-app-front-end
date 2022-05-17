import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, IconPropTypes } from '../utils';

const WalletIcon = ({
  style,
  size,
  color,
  width,
  height,
  ...props
}: IconPropTypes) => (
  <Svg
    height={height || 14}
    style={getStyleWithScale(style, size)}
    width={width || 18}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 20"
    fill="none"
    {...props}>
    <Path
      d="M19.3494 4.59399C19.6124 4.32956 19.775 3.96505 19.775 3.5625C19.775 2.13345 18.6165 0.975 17.1875 0.975H4.25C2.51017 0.975 1.1 2.38517 1.1 4.125V15.375C1.1 17.1148 2.51017 18.525 4.25 18.525H18.2141C19.6475 18.525 20.9 17.4125 20.9 15.9375V6.9375C20.9 5.87446 20.2494 4.99969 19.3494 4.59399Z"
      stroke={color}
      stroke-width="1.8"
    />
  </Svg>
);

export default WalletIcon;
