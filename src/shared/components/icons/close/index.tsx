import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, IconPropTypes } from '../utils';

const CloseIcon = ({ style, size, color, ...props }: IconPropTypes) => (
  <Svg
    fill="none"
    height={18}
    style={getStyleWithScale(style, size)}
    width={18}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2.27.374 9 7.103 15.701.402A1.273 1.273 0 0 1 16.615 0a1.384 1.384 0 0 1 1.292 1.88c-.064.157-.16.3-.281.418L10.856 9l6.77 6.77c.228.224.362.526.374.845A1.384 1.384 0 0 1 16.615 18a1.275 1.275 0 0 1-.955-.374L9 10.896l-6.715 6.716a1.274 1.274 0 0 1-.9.388 1.384 1.384 0 0 1-1.292-1.88c.064-.158.16-.3.281-.419L7.144 9 .375 2.23A1.246 1.246 0 0 1 0 1.384 1.385 1.385 0 0 1 1.385 0c.332.004.65.138.886.374Z"
      fill={color}
    />
  </Svg>
);

export default CloseIcon;
