import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, IconPropTypes, iconDefaultProps } from '../utils';

const Success = ({
  style,
  size,
  height,
  width,
  color,
  ...props
}: IconPropTypes) => (
  <Svg
    fill="none"
    height={height || 20}
    width={width || 20}
    style={getStyleWithScale(style, size)}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M8.8127 13.9197L14.7548 7.97983C15.0674 7.66737 15.0674 7.16065 14.7548 6.84821L14.4717 6.56529C14.1593 6.25305 13.6529 6.25307 13.3406 6.56534L8.8127 11.0917C8.50032 11.4039 7.99398 11.4039 7.68157 11.0917L5.98223 9.39324C5.66984 9.08102 5.16354 9.08102 4.85115 9.39324L4.56808 9.67617C4.25547 9.98862 4.25546 10.4954 4.56808 10.8078L7.68159 13.9197C7.99399 14.232 8.50032 14.2319 8.8127 13.9197Z"
      fill={color || '#25174E'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.4853 19.6667L19.688 14.4667C19.8881 14.2667 20.0104 13.9778 19.9993 13.6889V6.31111C20.0008 6.16479 19.973 6.01966 19.9176 5.8842C19.8623 5.74874 19.7804 5.62568 19.6769 5.52222L14.4742 0.322222C14.263 0.122223 13.9851 0 13.6849 0H6.3144C6.02536 0 5.73632 0.122221 5.5251 0.333332L0.32239 5.53333C0.122286 5.74444 0 6.02222 0 6.32222V13.6889C0 13.9778 0.122286 14.2667 0.32239 14.4667L5.53622 19.6778C5.73632 19.8778 6.02536 20 6.3144 20H13.696C13.9851 20 14.2741 19.8778 14.4853 19.6667ZM13.2291 2.22222L17.787 6.77778V13.2222L13.2291 17.7778H6.78131L2.22338 13.2222V6.77778L6.78131 2.22222H13.2291Z"
      fill={color || '#25174E'}
    />
  </Svg>
);

export default Success;
