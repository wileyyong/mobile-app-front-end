import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { getStyleWithScale, IconPropTypes } from '../utils';

const PlanetIcon = ({ color, size, style, ...props }: IconPropTypes) => {
  return (
    <Svg
      fill="none"
      height="28"
      style={getStyleWithScale(style, size)}
      viewBox="0 0 28 28"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M0.182106 19.325C0.372865 19.7543 0.658146 20.1377 1.01782 20.4481C1.37749 20.7585 1.80279 20.9883 2.2637 21.1213C3.61107 21.5221 5.02674 21.6592 6.42889 21.5246C7.92599 22.938 9.81075 23.9008 11.8567 24.2971C13.9026 24.6935 16.0226 24.5065 17.962 23.7589C19.9014 23.0112 21.5776 21.7345 22.7892 20.0823C24.0008 18.4301 24.6962 16.4726 24.7919 14.4451C27.1913 12.5161 28.5245 10.4587 27.8053 8.68378C27.6001 8.15741 27.2654 7.68802 26.8304 7.31676C26.3955 6.94549 25.8736 6.68367 25.3105 6.55424C24.1807 6.33407 23.0098 6.43408 21.9368 6.84238C20.4499 5.29456 18.518 4.21873 16.3931 3.75526C14.2683 3.29178 12.0492 3.46219 10.0254 4.24424C8.00162 5.02629 6.26709 6.38368 5.04815 8.13928C3.8292 9.89489 3.18244 11.9672 3.19226 14.0858C1.49543 14.9927 -0.640886 17.314 0.182106 19.325ZM2.42182 18.4733C2.27593 18.1101 2.86226 17.296 3.56471 16.6849C3.80569 17.5729 4.16164 18.4275 4.62403 19.2282C3.3357 19.1458 2.57491 18.8515 2.42182 18.4733ZM20.9595 18.5957C19.7071 20.3897 17.7748 21.6277 15.586 22.0385C14.0952 22.3135 12.5559 22.1985 11.1257 21.705C10.6559 21.5348 10.2042 21.3206 9.77691 21.0654C11.9472 20.6351 14.0734 20.016 16.1298 19.2155C18.1939 18.4267 20.1828 17.4632 22.0738 16.3361C21.8258 17.1412 21.4498 17.9036 20.9595 18.5957ZM24.7206 8.84996C24.9128 8.88512 25.0923 8.96813 25.2416 9.09091C25.391 9.21368 25.5051 9.37201 25.5728 9.55047C25.7259 9.92866 25.3668 10.6488 24.4843 11.5699C24.258 10.6309 23.9031 9.72571 23.4292 8.8786C23.8523 8.77744 24.2931 8.76767 24.7206 8.84996ZM7.03509 9.42811C7.65111 8.53218 8.44418 7.76443 9.36812 7.16959C10.2921 6.57475 11.3284 6.1647 12.4168 5.96331C13.9113 5.68059 15.4566 5.7972 16.8884 6.30072C18.2619 6.77668 19.4823 7.59608 20.4271 8.67652C21.3718 9.75695 22.0075 11.0604 22.2703 12.4557C22.333 12.7412 22.3745 13.0307 22.3945 13.322C20.1808 14.8364 17.7842 16.0802 15.2585 17.0254C12.7424 18.0447 10.1059 18.756 7.4095 19.143C6.29775 17.7801 5.66062 16.1083 5.59035 14.3697C5.52008 12.631 6.0203 10.9158 7.01863 9.47212L7.03509 9.42811Z"
        fill="#362566"
      />
    </Svg>
  );
};

export default PlanetIcon;
