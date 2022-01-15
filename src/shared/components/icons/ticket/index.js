import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, iconDefaultProps, iconPropTypes } from '../utils';

const TicketIcon = ({ color, size, style, ...props }) => (
  <Svg
    fill="none"
    height={36}
    style={getStyleWithScale(style, size)}
    width={36}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M22.496 3.055a1.333 1.333 0 0 0-1.884 0L3.055 20.612a1.333 1.333 0 0 0 0 1.884l1.9 1.898a4.887 4.887 0 0 1 6.65 6.65l1.899 1.901a1.333 1.333 0 0 0 1.886 0L32.944 15.39a1.333 1.333 0 0 0 0-1.883l-1.901-1.904a4.887 4.887 0 0 1-6.65-6.65l-1.898-1.897ZM18.729 1.17a3.999 3.999 0 0 1 5.654 0l2.081 2.083c.908.906.747 2.18.288 2.95a2.221 2.221 0 0 0 3.044 3.044c.77-.457 2.044-.62 2.95.288l2.083 2.084a3.998 3.998 0 0 1 0 5.655L17.275 34.829a3.998 3.998 0 0 1-5.655 0l-2.082-2.081c-.907-.906-.747-2.182-.288-2.95a2.221 2.221 0 0 0-3.044-3.044c-.77.457-2.044.618-2.95-.29L1.17 24.382a3.999 3.999 0 0 1 0-5.655L18.73 1.17Z"
      fill={color}
    />
  </Svg>
);

TicketIcon.defaultProps = iconDefaultProps;
TicketIcon.propTypes = iconPropTypes;

export default TicketIcon;
