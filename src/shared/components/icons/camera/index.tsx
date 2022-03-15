import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, IconPropTypes, iconDefaultProps } from '../utils';

const CameraIcon = ({ style, size, color, ...props }: IconPropTypes) => (
  <Svg
    fill="none"
    height={20}
    style={getStyleWithScale(style, size)}
    width={22}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2.964 17h15.679c1.93 0 2.963-1.035 2.963-2.948V4.914c0-1.914-1.034-2.949-2.963-2.949h-2.285a1.515 1.515 0 0 1-1.348-.548l-.687-.705a2.213 2.213 0 0 0-1.809-.704H9.06a2.213 2.213 0 0 0-1.81.704l-.686.705a1.515 1.515 0 0 1-1.348.547H2.964C1.033 1.964 0 3 0 4.912v9.139C-.002 15.964 1.033 17 2.964 17Zm.185-1.991a1.036 1.036 0 0 1-1.157-1.173V5.13A1.036 1.036 0 0 1 3.15 3.957h2.693a1.838 1.838 0 0 0 1.61-.61l.643-.696A1.674 1.674 0 0 1 9.608 2h2.357a1.639 1.639 0 0 1 1.496.643l.66.705a1.838 1.838 0 0 0 1.61.608h2.73a1.042 1.042 0 0 1 1.165 1.174v8.705a1.043 1.043 0 0 1-1.165 1.174H3.15ZM10.808 4.39a4.34 4.34 0 0 0-2.618.843.803.803 0 0 0-.27 1.157.776.776 0 0 0 1.122.123c.5-.4 1.124-.616 1.766-.609a3.16 3.16 0 0 1 3.06 2.244h-.772c-.432 0-.574.426-.313.774l1.359 1.827a.549.549 0 0 0 .93 0l1.336-1.829c.252-.356.13-.774-.304-.774h-.741a4.533 4.533 0 0 0-4.555-3.756ZM5.495 9.808h.765a4.54 4.54 0 0 0 4.556 3.757 4.323 4.323 0 0 0 2.618-.843.789.789 0 0 0 .27-1.157.775.775 0 0 0-1.122-.123 2.806 2.806 0 0 1-1.765.609 3.168 3.168 0 0 1-3.061-2.243h.747c.433 0 .575-.426.305-.774L7.46 7.208a.556.556 0 0 0-.94 0L5.19 9.034c-.261.357-.13.774.305.774Z"
      fill={color}
    />
  </Svg>
);

export default CameraIcon;
