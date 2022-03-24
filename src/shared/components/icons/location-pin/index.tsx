import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, iconDefaultProps, iconPropTypes } from '../utils';

const LocationPinIcon = ({ color, size, style, width, height, ...props }) => {
  return (
    <Svg
      fill="none"
      height={height || 28}
      style={getStyleWithScale(style, size)}
      width={width || 28}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5.99999 0.785645C9.07713 0.785645 11.5714 3.27993 11.5714 6.35707C11.5714 8.71136 9.91713 11.2771 6.65142 14.0816C6.46983 14.2376 6.23831 14.3233 5.99892 14.3231C5.75953 14.3229 5.52816 14.2368 5.34684 14.0805L5.13084 13.8931C2.0097 11.1616 0.428558 8.65879 0.428558 6.35707C0.428558 3.27993 2.92284 0.785645 5.99999 0.785645ZM5.99999 4.21422C5.43167 4.21422 4.88662 4.43998 4.48476 4.84184C4.08289 5.24371 3.85713 5.78875 3.85713 6.35707C3.85713 6.92539 4.08289 7.47044 4.48476 7.8723C4.88662 8.27417 5.43167 8.49993 5.99999 8.49993C6.56831 8.49993 7.11335 8.27417 7.51522 7.8723C7.91708 7.47044 8.14284 6.92539 8.14284 6.35707C8.14284 5.78875 7.91708 5.24371 7.51522 4.84184C7.11335 4.43998 6.56831 4.21422 5.99999 4.21422Z"
        fill={color}
      />
    </Svg>
  );
};

LocationPinIcon.defaultProps = iconDefaultProps;
LocationPinIcon.propTypes = iconPropTypes;

export default LocationPinIcon;
