import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, iconDefaultProps, iconPropTypes } from '../utils';

const ArrowDown = ({ color, size, style, ...props }) => {
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
        d="M12.2194 8.35184C12.36 8.21134 12.5506 8.13242 12.7493 8.13242C12.948 8.13242 13.1386 8.21134 13.2791 8.35184L17.9953 13.068L22.7115 8.35184C22.7806 8.28026 22.8633 8.22317 22.9548 8.18389C23.0462 8.14461 23.1445 8.12394 23.2441 8.12308C23.3436 8.12221 23.4422 8.14117 23.5343 8.17885C23.6265 8.21654 23.7101 8.27218 23.7805 8.34255C23.8509 8.41292 23.9065 8.49659 23.9442 8.5887C23.9819 8.6808 24.0008 8.77948 24 8.87899C23.9991 8.9785 23.9784 9.07684 23.9392 9.16828C23.8999 9.25971 23.8428 9.34241 23.7712 9.41154L18.5252 14.6576C18.3846 14.7981 18.194 14.877 17.9953 14.877C17.7966 14.877 17.606 14.7981 17.4655 14.6576L12.2194 9.41154C12.0789 9.271 12 9.08041 12 8.88169C12 8.68297 12.0789 8.49238 12.2194 8.35184Z"
        fill={color}
      />
    </Svg>
  );
};

ArrowDown.defaultProps = iconDefaultProps;
ArrowDown.propTypes = iconPropTypes;

export default ArrowDown;
