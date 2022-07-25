import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, IconPropTypes } from '../utils';

const RefreshIcon = ({ style, size, color, ...props }: IconPropTypes) => (
  <Svg
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    style={getStyleWithScale(style, size)}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2.17662 5.51407C2.62458 3.53989 4.39128 2.06668 6.5001 2.06668C7.72457 2.06668 8.83178 2.56201 9.63493 3.36518C9.7101 3.44035 9.8015 3.53526 9.90199 3.64168H9.1251C8.67407 3.64168 8.30844 4.00732 8.30844 4.45835C8.30844 4.90938 8.67407 5.27502 9.1251 5.27502H11.7501C12.2011 5.27502 12.5668 4.90938 12.5668 4.45835V1.83335C12.5668 1.38232 12.2011 1.01668 11.7501 1.01668C11.2991 1.01668 10.9334 1.38232 10.9334 1.83335V2.35667C10.8822 2.30361 10.834 2.25438 10.7899 2.21025C9.69294 1.11328 8.17515 0.43335 6.5001 0.43335C3.6119 0.43335 1.19685 2.45084 0.583776 5.15263C0.483968 5.59248 0.759627 6.02996 1.19948 6.12977C1.63933 6.22958 2.07681 5.95392 2.17662 5.51407Z"
      fill={color || '#F8F8F8'}
      fillOpacity="0.7"
    />
    <Path
      d="M10.8234 7.48596C10.3755 9.46014 8.60878 10.9334 6.49995 10.9334C5.27549 10.9334 4.16828 10.438 3.36513 9.63486C3.28995 9.55968 3.19856 9.46477 3.09807 9.35835H3.87495C4.32599 9.35835 4.69162 8.99272 4.69162 8.54168C4.69162 8.09065 4.32599 7.72502 3.87495 7.72502H1.24996C0.798922 7.72502 0.433289 8.09065 0.433289 8.54168V11.1667C0.433289 11.6177 0.798922 11.9833 1.24996 11.9833C1.70099 11.9833 2.06662 11.6177 2.06662 11.1667V10.6434C2.11783 10.6964 2.16604 10.7457 2.21017 10.7898C3.30712 11.8868 4.82491 12.5667 6.49995 12.5667C9.38816 12.5667 11.8032 10.5492 12.4163 7.8474C12.5161 7.40755 12.2404 6.97007 11.8006 6.87026C11.3607 6.77045 10.9232 7.04611 10.8234 7.48596Z"
      fill={color || '#F8F8F8'}
      fillOpacity="0.7"
    />
  </Svg>
);

export default RefreshIcon;