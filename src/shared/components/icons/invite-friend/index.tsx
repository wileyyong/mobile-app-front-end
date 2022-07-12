import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, IconPropTypes } from '../utils';

const InviteFriendIcon = ({
  style,
  size,
  color,
  width,
  height,
  ...props
}: IconPropTypes) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    style={getStyleWithScale(style, size)}
    width={width || 48}
    height={height || 36}
    viewBox="0 0 48 36"
    fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.7838 2.74497C27.323 1.107 29.5084 0.200195 31.9161 0.200195C36.8566 0.200195 40.577 4.07449 40.2062 9.20112C39.8671 13.8962 36.3208 17.9429 31.9161 17.9429C27.5131 17.9429 23.9593 13.899 23.6258 9.19889C23.4455 6.66083 24.2398 4.38801 25.7838 2.74497ZM27.2167 8.94397C27.1018 7.32672 27.605 6.06395 28.4072 5.21022C28.7068 4.8914 29.0619 4.61499 29.4663 4.39342C30.1513 4.01811 30.9778 3.8002 31.9161 3.8002C34.3189 3.8002 36.1573 5.28985 36.5525 7.56556C36.6275 7.99762 36.6506 8.45802 36.6155 8.94193C36.6093 9.029 36.6015 9.11524 36.5922 9.20064C36.2516 12.3454 33.9316 14.3429 31.9161 14.3429C29.8981 14.3429 27.575 12.3431 27.2394 9.19938C27.2304 9.11506 27.2228 9.02992 27.2167 8.94397Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.9159 20.6289C25.032 20.6289 17.8644 24.0708 16.0444 31.363C15.6175 33.073 16.6896 35.2288 18.944 35.2288H44.8888C47.1492 35.2288 48.2076 33.0677 47.7899 31.369C45.9697 23.9603 38.7839 20.6289 31.9159 20.6289ZM19.7997 31.3637C19.7686 31.4513 19.7387 31.5397 19.7101 31.6288H44.1262C44.0986 31.5412 44.0699 31.4544 44.04 31.3683C42.435 26.7442 37.5365 24.2289 31.9159 24.2289C26.3216 24.2289 21.4149 26.8137 19.7997 31.3637Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.3182 3.34277C9.19913 3.34277 5.994 6.56345 6.30729 10.9681C6.58567 14.8786 9.58251 18.3428 13.3182 18.3428C17.0557 18.3428 20.0459 14.8758 20.3288 10.9705C20.6429 6.63656 17.4491 3.34277 13.3182 3.34277ZM13.3182 6.99142C11.2061 6.99142 9.74094 8.49716 9.89796 10.7056C10.0723 13.1538 11.8816 14.6941 13.3182 14.6941C14.7528 14.6941 16.5609 13.1547 16.7385 10.7033C16.8949 8.54544 15.4183 6.99142 13.3182 6.99142Z"
      fill={color}
    />
    <Path
      d="M13.3174 19.7002C7.72974 19.7002 1.79886 22.5016 0.288821 28.5479L0.288203 28.5504C-0.0948381 30.0934 0.87283 32.0853 2.95725 32.0853H14.0063C15.0004 32.0853 15.8063 31.2795 15.8063 30.2853C15.8063 29.2912 15.0004 28.4853 14.0063 28.4853H4.08489C5.40655 25.2102 9.06113 23.3002 13.3174 23.3002C15.2152 23.3002 16.8986 23.5867 18.3749 24.2617C19.2789 24.6751 20.347 24.2774 20.7604 23.3733C21.1738 22.4692 20.776 21.4012 19.8719 20.9878C17.7957 20.0384 15.5665 19.7002 13.3174 19.7002Z"
      fill={color}
    />
  </Svg>
);

export default InviteFriendIcon;
