import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, IconPropTypes, iconDefaultProps } from '../utils';

const Info = ({ style, size, color, ...props }: IconPropTypes) => (
  <Svg
    fill="none"
    height={20}
    style={getStyleWithScale(style, size)}
    width={20}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9.99524 4.44441C9.38127 4.44441 8.88355 4.94187 8.88355 5.55552C8.88355 6.16917 9.38127 6.66663 9.99524 6.66663C10.6092 6.66663 11.1069 6.16917 11.1069 5.55552C11.1069 4.94187 10.6092 4.44441 9.99524 4.44441Z"
      fill={color || '#25174E'}
    />
    <Path
      d="M11.1069 14.4447C11.1069 15.0558 10.6067 15.5558 9.99524 15.5558C9.38381 15.5558 8.88355 15.0558 8.88355 14.4447V8.88912C8.88355 8.27801 9.38381 7.77801 9.99524 7.77801C10.6067 7.77801 11.1069 8.27801 11.1069 8.88912V14.4447Z"
      fill={color || '#25174E'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.311974 14.4668L5.51468 19.6668C5.7259 19.8779 6.01494 20.0001 6.30398 20.0001H13.6856C13.9746 20.0001 14.2637 19.8779 14.4638 19.6779L19.6776 14.4668C19.8777 14.2668 20 13.9779 20 13.689L20 6.32234C20 6.02234 19.8777 5.74457 19.6776 5.53345L14.4749 0.333455C14.2637 0.122344 13.9746 0.00012274 13.6856 0.000122715L6.3151 0.00012207C6.01494 0.000122044 5.73702 0.122345 5.5258 0.322344L0.323089 5.52234C0.219556 5.6258 0.137716 5.74886 0.0823588 5.88432C0.0269999 6.01978 -0.000761593 6.16492 0.000699423 6.31123L0.000698778 13.689C-0.0104173 13.9779 0.111869 14.2668 0.311974 14.4668ZM2.21296 6.7779L6.77089 2.22234L13.2187 2.22234L17.7766 6.7779V13.2223L13.2187 17.7779H6.77089L2.21296 13.2223L2.21296 6.7779Z"
      fill={color || '#25174E'}
    />
  </Svg>
);

export default Info;