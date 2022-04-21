import { Padding } from '$theme';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image as Im,
  ImageBackground,
} from 'react-native';
import Svg, {
  Polygon,
  Image,
  Mask,
  ClipPath,
  Defs,
  Pattern,
  LinearGradient,
  Stop,
  Rect,
  Circle,
} from 'react-native-svg';

interface HexagonProps {
  pic?: NodeRequire | { uri: string };
  line?: number;
  index?: number;
}
let pics = [
  require('../../../assets/images/dimage.jpg'),
  require('../../../assets/images/dimage1.jpg'),
  require('../../../assets/images/dimage4.jpg'),
  require('../../../assets/images/dimage5.jpg'),
  require('../../../assets/images/dimage2.jpg'),
  require('../../../assets/images/dimage6.jpg'),
  require('../../../assets/images/dimage7.jpg'),
  require('../../../assets/images/dimage8.jpg'),
];

const Hexagon = ({ line, index }: HexagonProps) => {
  let im = Math.floor(Math.random() * 8);
  return (
    <View style={styles.hex}>
      <Im
        source={require('../../../assets/icons/polygon.png')}
        style={styles.polygon}
      />
      <Svg height="120" width="120" fill={'green'}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor="#B18FB5" stopOpacity="0.8" />
            <Stop offset="1" stopColor="#CAA7D1" stopOpacity=".9" />
          </LinearGradient>
          <Pattern
            id="pattern1"
            height="100%"
            width="100%"
            patternContentUnits="objectBoundingBox">
            <Image
              height="1"
              width="1"
              preserveAspectRatio="none"
              href={pics[im]}
            />
          </Pattern>
          <ClipPath id="clip">
            <Polygon points="111.96152422706632,90 60.00000000000001,120 8.038475772933694,90.00000000000003 8.038475772933673,30.000000000000018 59.999999999999986,0 111.96152422706632,30.00000000000002" />
          </ClipPath>
        </Defs>
        <Polygon
          points="111.96152422706632,90 60.00000000000001,120 8.038475772933694,90.00000000000003 8.038475772933673,30.000000000000018 59.999999999999986,0 111.96152422706632,30.00000000000002"
          // stroke="url(#grad)"
          // strokeWidth="5"
          x="0"
          y="0"
          fill="url(#pattern1)"
        />
        {/* <Polygon
          points="117.15767664977295,93 60.00000000000001,126 2.842323350227062,93.00000000000003 2.8423233502270406,27.00000000000002 59.999999999999986,-6 117.15767664977295,27.00000000000002"
          stroke="url(#grad)"
          strokeWidth="4"
          x="5"
          y="10"
          fill="transparent"
          strokeLinejoin="round"
        /> */}
      </Svg>
    </View>
  );
};

export default Hexagon;

const styles = StyleSheet.create({
  bg: {
    width: 130,
    height: 130,
  },
  hex: {
    margin: 4,
    height: 130,
    width: 130,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  polygon: {
    width: 120,
    height: 130,
    padding: 10,
    resizeMode: 'stretch',
    position: 'absolute',
  },
});
