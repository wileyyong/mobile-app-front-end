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
import Border from '../../../assets/icons/polygon.svg';

interface HexagonProps {
  pic?: string;
  line?: number;
  index?: number;
}


const Hexagon = ({ line, index, pic }: HexagonProps) => {
  console.log(pic);
  let im = Math.floor(Math.random() * 8);
  return (
    <View style={styles.hex}>
      <Border style={styles.polygon} />
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
              href={{ uri: pic }}
            />
          </Pattern>
          <ClipPath id="clip">
            <Polygon points="111.96152422706632,90 60.00000000000001,120 8.038475772933694,90.00000000000003 8.038475772933673,30.000000000000018 59.999999999999986,0 111.96152422706632,30.00000000000002" />
          </ClipPath>
        </Defs>
        <Polygon
          points="111.96152422706632,90 60.00000000000001,120 8.038475772933694,90.00000000000003 8.038475772933673,30.000000000000018 59.999999999999986,0 111.96152422706632,30.00000000000002"
          x="0"
          y="0"
          fill="url(#pattern1)"
        />
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
