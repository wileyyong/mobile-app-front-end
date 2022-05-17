import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, IconPropTypes } from '../utils';

const ShareIcon = ({
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
    viewBox="0 0 18 22"
    {...props}>
    <Path
      d="M10.0458 4.53593L13.2544 7.73966L13.2543 7.73973L13.2566 7.74176L13.3506 7.82476L13.3506 7.82484L13.3532 7.82683C13.5643 7.99009 13.8297 8.06681 14.0954 8.04141C14.361 8.016 14.6071 7.89037 14.7834 7.69007C14.9598 7.48976 15.0533 7.2298 15.0449 6.96304C15.0364 6.69628 14.9267 6.44274 14.7381 6.25397L14.738 6.25394L9.73515 1.25704L9.73521 1.25697L9.73291 1.25494L9.63891 1.17194L9.63898 1.17186L9.63643 1.16989C9.43429 1.01332 9.18196 0.935882 8.92678 0.952121C8.67161 0.968359 8.43113 1.07715 8.25049 1.25806M10.0458 4.53593L8.25049 1.25806M10.0458 4.53593V14.2551C10.0458 14.5123 9.95136 14.7605 9.78046 14.9527C9.60957 15.1449 9.37408 15.2677 9.11868 15.2978L9.11582 15.2981L9.11581 15.298L8.99882 15.305L8.99582 15.3052V15.3051C8.73865 15.3051 8.49043 15.2107 8.29825 15.0398C8.10606 14.8689 7.98328 14.6334 7.95319 14.378L7.95286 14.3751L7.95294 14.3751L7.94594 14.2581L7.94576 14.2551H7.94585V4.53109M10.0458 4.53593L7.94585 4.53109M8.25049 1.25806L3.2536 6.25395L3.25352 6.25387L3.2513 6.25641L3.1683 6.35141L3.16824 6.35136L3.16645 6.35366C3.00973 6.55568 2.93212 6.80794 2.94817 7.06311C2.96421 7.31829 3.07281 7.55884 3.25359 7.73964L3.25353 7.7397L3.25586 7.74176L3.34985 7.82476L3.34979 7.82484L3.3523 7.82679C3.55432 7.9835 3.80658 8.06111 4.06175 8.04507C4.31693 8.02902 4.55748 7.92042 4.73827 7.73964L4.73828 7.73963L7.94585 4.53109M8.25049 1.25806L7.94585 4.53109M17.0386 10.8802L17.0387 10.8802L17.0383 10.8774C17.0082 10.622 16.8854 10.3865 16.6933 10.2156C16.5011 10.0447 16.2529 9.95027 15.9957 9.95023C15.7172 9.95023 15.4501 10.0609 15.2532 10.2578C15.0563 10.4547 14.9457 10.7217 14.9457 11.0002V16.9991L14.9398 17.1472C14.9027 17.6373 14.6819 18.0953 14.3216 18.4296C13.9611 18.764 13.4875 18.95 12.9957 18.95H5.00091L4.85279 18.9441C4.36272 18.907 3.90472 18.6863 3.57044 18.326C3.23596 17.9654 3.05005 17.4919 3.04996 17.0001V11.0002H3.05005L3.04987 10.9972L3.04287 10.8802L3.04295 10.8802L3.04261 10.8773C3.011 10.6116 2.87911 10.3679 2.67389 10.1961C2.46867 10.0244 2.2056 9.93746 1.93844 9.95315C1.67129 9.96883 1.4202 10.0859 1.23648 10.2805C1.05277 10.4751 0.950297 10.7325 0.95 11.0002V11.0002L0.949984 17.0001L0.950016 17.0013L0.955 17.2013L0.955063 17.2026C1.00701 18.2403 1.45584 19.2184 2.2087 19.9345C2.96156 20.6506 3.96087 21.05 4.99991 21.05L12.9957 21.05L12.997 21.05L13.197 21.045L13.197 21.045L13.1982 21.0449C14.236 20.993 15.2141 20.5442 15.9302 19.7913C16.6463 19.0384 17.0457 18.0391 17.0457 17.0001V11.0002H17.0457L17.0456 10.9972L17.0386 10.8802ZM8.28584 1.29342L8.28583 1.29341L8.28584 1.29342Z"
      fill={color}
      stroke={color}
      stroke-width="0.1"
    />
  </Svg>
);

export default ShareIcon;
