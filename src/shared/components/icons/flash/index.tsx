import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, iconPropTypes, iconDefaultProps } from '../utils';

const FlashIcon = ({ style, size, color, ...props }) => (
  <Svg
    fill="none"
    height={20}
    style={getStyleWithScale(style, size)}
    width={20}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10 20A10.057 10.057 0 0 0 20 9.995 10.057 10.057 0 0 0 10 0 10.049 10.049 0 0 0 0 9.995 10.057 10.057 0 0 0 10 20Zm0-2.248a7.73 7.73 0 0 1-7.742-7.757A7.714 7.714 0 0 1 10 2.247a7.753 7.753 0 0 1 0 15.505Zm-4.096-7.135a.471.471 0 0 0 .498.468h3.052L7.827 15.41c-.258.67.458 1.052.92.507l5.08-6.266a.64.64 0 0 0 .163-.412.477.477 0 0 0-.497-.468h-3.05l1.626-4.314c.258-.67-.457-1.052-.909-.514l-5.093 6.272a.636.636 0 0 0-.163.402Z"
      fill={color}
    />
  </Svg>
);

FlashIcon.defaultProps = iconDefaultProps;
FlashIcon.propTypes = iconPropTypes;

export default FlashIcon;
