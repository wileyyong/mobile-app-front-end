import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, IconPropTypes } from '../utils';

const CheckMarkIcon = ({ style, size, color, ...props }: IconPropTypes) => (
  <Svg
    fill="none"
    height={18}
    style={getStyleWithScale(style, size)}
    width={18}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M17.4646 2.88837L7.32686 13.4027C7.01227 13.729 6.4897 13.729 6.17509 13.4028L0.5355 7.55449C0.236656 7.24459 0.236656 6.75376 0.5355 6.44386L1.67393 5.2633C1.98854 4.93705 2.51107 4.93705 2.82567 5.2633L6.17508 8.73665C6.4897 9.06292 7.01227 9.06289 7.32686 8.7366L15.1743 0.597282C15.4889 0.27099 16.0115 0.270967 16.3261 0.597231L17.4645 1.77778C17.7634 2.08767 17.7634 2.57846 17.4646 2.88837Z"
      fill={color}
    />
  </Svg>
);

export default CheckMarkIcon;
