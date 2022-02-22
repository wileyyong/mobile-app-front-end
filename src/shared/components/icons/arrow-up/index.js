import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, iconDefaultProps, iconPropTypes } from '../utils';

const ArrowUp = ({ color, size, style, ...props }) => {
  return (
    <Svg
      fill={color}
      height={28}
      style={getStyleWithScale(style, size)}
      width={28}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M23.7806 14.6482C23.64 14.7887 23.4494 14.8676 23.2507 14.8676C23.052 14.8676 22.8614 14.7887 22.7209 14.6482L18.0047 9.93197L13.2885 14.6482C13.2194 14.7197 13.1367 14.7768 13.0452 14.8161C12.9538 14.8554 12.8555 14.8761 12.7559 14.8769C12.6564 14.8778 12.5578 14.8588 12.4657 14.8211C12.3735 14.7835 12.2899 14.7278 12.2195 14.6574C12.1491 14.5871 12.0935 14.5034 12.0558 14.4113C12.0181 14.3192 11.9992 14.2205 12 14.121C12.0009 14.0215 12.0216 13.9232 12.0608 13.8317C12.1001 13.7403 12.1572 13.6576 12.2288 13.5885L17.4748 8.34242C17.6154 8.20192 17.806 8.12299 18.0047 8.12299C18.2034 8.12299 18.394 8.20192 18.5345 8.34242L23.7806 13.5885C23.9211 13.729 24 13.9196 24 14.1183C24 14.317 23.9211 14.5076 23.7806 14.6482Z"
        fill={color}
      />
    </Svg>
  );
};

ArrowUp.defaultProps = iconDefaultProps;
ArrowUp.propTypes = iconPropTypes;

export default ArrowUp;
