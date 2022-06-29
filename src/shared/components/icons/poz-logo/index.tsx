import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

import { getStyleWithScale, IconPropTypes } from '../utils';

const PozLogo = ({
  style,
  size,
  color,
  height,
  width,
  ...props
}: IconPropTypes) => (
  <Svg
    fill="none"
    height={height ? height : 468}
    style={getStyleWithScale(style, size)}
    width={width ? width : 2782}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2782 468"
    {...props}>
    <Path
      d="M432.022 181.846C435.136 180.036 438.987 180.036 442.101 181.846L480.106 203.945C483.179 205.732 485.068 209.01 485.068 212.556V255.935C485.068 259.481 483.179 262.76 480.106 264.547L442.101 286.645C438.987 288.456 435.136 288.456 432.022 286.645L394.017 264.547C390.944 262.76 389.055 259.481 389.055 255.935V212.556C389.055 209.01 390.944 205.732 394.017 203.945L432.022 181.846Z"
      fill={color}
    />
    <Path
      d="M427.859 139.975C430.689 139.704 433.06 141.981 433.06 144.814V170.41C433.06 172.183 432.116 173.822 430.579 174.715L387.573 199.722C386.016 200.627 384.091 200.627 382.534 199.722L360.673 187.01C358.242 185.597 357.449 182.455 359.059 180.154C374.576 157.962 399.381 142.703 427.859 139.975Z"
      fill={color}
    />
    <Path
      d="M350.519 273.392C351.699 275.98 354.876 276.884 357.34 275.451L378.573 263.105C380.11 262.212 381.054 260.572 381.054 258.799V209.694C381.054 207.921 380.11 206.282 378.573 205.389L357.34 193.042C354.876 191.61 351.699 192.514 350.519 195.102C345.079 207.033 342.049 220.287 342.049 234.247C342.049 248.206 345.079 261.461 350.519 273.392Z"
      fill={color}
    />
    <Path
      d="M446.264 139.975C443.434 139.704 441.062 141.981 441.062 144.814V170.41C441.062 172.183 442.007 173.822 443.543 174.715L486.549 199.722C488.106 200.627 490.032 200.627 491.589 199.722L513.45 187.01C515.881 185.597 516.673 182.455 515.064 180.154C499.547 157.962 474.742 142.703 446.264 139.975Z"
      fill={color}
    />
    <Path
      d="M523.604 195.102C522.424 192.514 519.246 191.61 516.783 193.042L495.549 205.389C494.013 206.282 493.068 207.921 493.068 209.694V258.799C493.068 260.572 494.013 262.212 495.549 263.105L516.783 275.451C519.246 276.884 522.424 275.98 523.604 273.392C529.044 261.461 532.074 248.206 532.074 234.247C532.074 220.287 529.044 207.033 523.604 195.102Z"
      fill={color}
    />
    <Path
      d="M515.064 288.337C516.673 286.036 515.881 282.894 513.45 281.48L491.589 268.769C490.032 267.863 488.107 267.864 486.549 268.769L443.543 293.775C442.007 294.669 441.062 296.308 441.062 298.081V323.676C441.062 326.51 443.434 328.787 446.264 328.516C474.742 325.788 499.547 310.529 515.064 288.337Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M326.045 234.245C326.045 250.527 329.583 266.028 335.949 279.99C338.945 286.56 344.756 290.573 351.006 291.722C351.259 291.768 351.472 291.823 351.641 291.879C351.724 291.906 351.791 291.931 351.843 291.953C369.024 317.117 397.168 334.308 429.475 336.655C429.503 336.676 429.534 336.701 429.57 336.731C429.592 336.749 429.616 336.77 429.641 336.792C429.774 336.911 429.928 337.066 430.095 337.261C434.218 342.077 440.603 345.082 447.793 344.393C481.111 341.201 510.086 323.349 528.191 297.457C529.78 295.185 530.854 292.709 531.425 290.159C531.721 288.843 532.534 287.419 533.524 286.49C535.433 284.698 537.021 282.513 538.172 279.99C544.538 266.028 548.076 250.527 548.076 234.245C548.076 217.964 544.538 202.463 538.172 188.5C537.021 185.977 535.433 183.792 533.524 182.001C532.534 181.071 531.721 179.648 531.425 178.331C530.854 175.782 529.78 173.306 528.191 171.033C510.086 145.141 481.111 127.289 447.793 124.097C444.924 123.823 442.137 124.136 439.551 124.954C438.054 125.427 436.067 125.427 434.57 124.954C431.984 124.136 429.197 123.823 426.328 124.097C393.01 127.289 364.035 145.141 345.93 171.033C344.341 173.306 343.267 175.782 342.696 178.331C342.4 179.648 341.587 181.071 340.597 182.001C338.688 183.792 337.1 185.977 335.949 188.5C329.583 202.463 326.045 217.964 326.045 234.245ZM521.627 175.593C504.816 151.551 477.925 134.996 447.028 132.036C445.236 131.865 443.532 132.062 441.969 132.556C438.898 133.527 435.223 133.527 432.152 132.556C430.589 132.062 428.885 131.865 427.093 132.036C396.196 134.996 369.305 151.551 352.494 175.593C351.502 177.012 350.85 178.53 350.504 180.071C349.859 182.947 348.235 185.787 346.082 187.807C344.929 188.89 343.952 190.223 343.233 191.8C337.33 204.747 334.046 219.125 334.046 234.245C334.046 249.366 337.33 263.743 343.233 276.69C345.073 280.726 348.601 283.17 352.457 283.878C354.725 284.295 356.972 285.274 358.263 287.179C374.164 310.652 400.357 326.652 430.404 328.725C432.706 328.884 434.684 330.335 436.182 332.085C438.725 335.056 442.61 336.877 447.028 336.454C477.925 333.494 504.816 316.939 521.627 292.897C522.619 291.478 523.271 289.961 523.617 288.419C524.262 285.543 525.886 282.704 528.039 280.683C529.192 279.601 530.169 278.267 530.888 276.69C536.791 263.743 540.075 249.366 540.075 234.245C540.075 219.125 536.791 204.747 530.888 191.8C530.169 190.223 529.192 188.89 528.039 187.807C525.886 185.787 524.262 182.947 523.617 180.071C523.271 178.53 522.619 177.012 521.627 175.593Z"
      fill={color}
    />
    <Path
      d="M2446.25 202.368V161.242C2446.25 157.928 2448.93 155.242 2452.25 155.242H2651.61C2654.92 155.242 2657.61 157.928 2657.61 161.242V202.368C2657.61 205.682 2654.92 208.368 2651.61 208.368H2578.49V309.303C2578.49 312.617 2575.81 315.303 2572.49 315.303H2531.37C2528.05 315.303 2525.37 312.617 2525.37 309.303V208.368H2452.25C2448.93 208.368 2446.25 205.682 2446.25 202.368Z"
      fill={color}
    />
    <Path
      d="M2255.25 309.302V161.469C2255.25 158.155 2257.94 155.469 2261.25 155.469H2425.96C2429.27 155.469 2431.96 158.155 2431.96 161.469V193.702C2431.96 197.016 2429.27 199.702 2425.96 199.702H2308.38V213.839H2417.98C2421.29 213.839 2423.98 216.525 2423.98 219.839V250.476C2423.98 253.79 2421.29 256.476 2417.98 256.476H2308.38V271.069H2425.96C2429.27 271.069 2431.96 273.755 2431.96 277.069V309.302C2431.96 312.616 2429.27 315.302 2425.96 315.302H2261.25C2257.94 315.302 2255.25 312.616 2255.25 309.302Z"
      fill={color}
    />
    <Path
      d="M2238.39 309.303C2238.39 312.617 2235.7 315.303 2232.39 315.303H2168.73C2166.93 315.303 2165.22 314.49 2164.08 313.089L2098.1 231.958L2098.08 231.93L2087.45 218.856V309.342C2087.43 312.638 2084.75 315.303 2081.45 315.303H2040.32C2037.01 315.303 2034.32 312.617 2034.32 309.303V161.242C2034.32 157.928 2037.01 155.242 2040.32 155.242H2105.34C2107.13 155.242 2108.84 156.046 2109.97 157.433L2110 157.459L2185.26 250.093V161.242C2185.26 157.928 2187.95 155.242 2191.26 155.242H2232.39C2235.7 155.242 2238.39 157.928 2238.39 161.242V309.303Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1951.24 155.699C1953.6 155.699 1955.75 157.087 1956.71 159.244L2022.93 306.849C2024.71 310.819 2021.8 315.304 2017.45 315.304H1969.06C1966.68 315.304 1964.54 313.908 1963.57 311.741L1954.88 292.191L1954.86 292.144L1953.3 288.628H1874.18L1863.69 311.78L1863.67 311.828C1862.69 313.946 1860.57 315.304 1858.23 315.304H1810.04C1805.69 315.304 1802.78 310.813 1804.57 306.842L1870.99 159.237C1871.96 157.084 1874.1 155.699 1876.46 155.699H1951.24ZM1902.73 242.342H1893.11L1913.63 200.617L1918.99 211.517L1919.01 211.564L1929.89 233.694L1929.92 233.741L1934.15 242.342H1924.52L1924.51 242.342H1902.74L1902.73 242.342Z"
      fill={color}
    />
    <Path
      d="M1631.96 155.242H1673.09C1676.4 155.242 1679.09 157.928 1679.09 161.242V262.406H1789.14C1792.46 262.406 1795.14 265.092 1795.14 268.406V309.303C1795.14 312.617 1792.46 315.303 1789.14 315.303H1631.96C1628.65 315.303 1625.96 312.617 1625.96 309.303V161.242C1625.96 157.928 1628.65 155.242 1631.96 155.242Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1434.91 309.949V161.242C1434.91 157.928 1437.6 155.242 1440.91 155.242H1547.54C1562.88 155.242 1616.91 157.303 1616.91 217.052C1616.91 276.573 1566.08 283.441 1549.37 283.441H1488.25V309.949C1488.25 313.262 1485.56 315.949 1482.25 315.949H1440.91C1437.6 315.949 1434.91 313.262 1434.91 309.949ZM1488.25 236.053V202.63H1545.02C1552.58 202.63 1567 203.088 1567 218.655C1567 234.222 1554.18 236.053 1545.94 236.053H1488.25Z"
      fill={color}
    />
    <Path
      d="M1135.69 309.302V161.469C1135.69 158.155 1138.38 155.469 1141.69 155.469H1306.4C1309.71 155.469 1312.4 158.155 1312.4 161.469V193.702C1312.4 197.016 1309.71 199.702 1306.4 199.702H1188.82V213.839H1298.42C1301.73 213.839 1304.42 216.525 1304.42 219.839V250.476C1304.42 253.79 1301.73 256.476 1298.42 256.476H1188.82V271.069H1306.4C1309.71 271.069 1312.4 273.755 1312.4 277.069V309.302C1312.4 312.616 1309.71 315.302 1306.4 315.302H1141.69C1138.38 315.302 1135.69 312.616 1135.69 309.302Z"
      fill={color}
    />
    <Path
      d="M958.176 155.242H999.302C1002.62 155.242 1005.3 157.928 1005.3 161.242V262.406H1115.36C1118.67 262.406 1121.36 265.092 1121.36 268.406V309.303C1121.36 312.617 1118.67 315.303 1115.36 315.303H958.176C954.862 315.303 952.176 312.617 952.176 309.303V161.242C952.176 157.928 954.862 155.242 958.176 155.242Z"
      fill={color}
    />
    <Path
      d="M933.645 155.242C936.959 155.242 939.645 157.928 939.645 161.242V203.66C939.645 205.736 938.571 207.666 936.806 208.76L835.901 271.298L933.645 271.298C936.959 271.298 939.645 273.984 939.645 277.298V309.303C939.645 312.617 936.959 315.303 933.645 315.303H764.379C761.065 315.303 758.379 312.617 758.379 309.303V267.809C758.379 265.726 759.459 263.793 761.232 262.7L863.49 199.704H842.33L842.312 199.704H764.379C761.065 199.704 758.379 197.017 758.379 193.704V161.242C758.379 157.928 761.065 155.242 764.379 155.242H933.645Z"
      fill={color}
    />
    <Path
      d="M743.266 155.242C746.58 155.242 749.266 157.928 749.266 161.242V203.66C749.266 205.736 748.192 207.666 746.427 208.76L645.522 271.298L743.266 271.298C746.58 271.298 749.266 273.984 749.266 277.298V309.303C749.266 312.617 746.58 315.303 743.266 315.303H574C570.686 315.303 568 312.617 568 309.303V267.809C568 265.726 569.08 263.793 570.853 262.7L673.111 199.704H651.951L651.933 199.704H574C570.686 199.704 568 197.017 568 193.704V161.242C568 157.928 570.686 155.242 574 155.242H743.266Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M124 309.949V161.242C124 157.928 126.686 155.242 130 155.242H236.632C251.97 155.242 305.997 157.303 305.997 217.052C305.997 276.573 255.175 283.441 238.463 283.441H177.34L177.34 309.949C177.34 313.262 174.654 315.949 171.34 315.949H130C126.686 315.949 124 313.262 124 309.949ZM177.34 236.053L177.34 202.63H234.114C241.668 202.63 256.091 203.088 256.091 218.655C256.091 234.222 243.271 236.053 235.029 236.053H177.34Z"
      fill={color}
    />
  </Svg>
);

export default PozLogo;