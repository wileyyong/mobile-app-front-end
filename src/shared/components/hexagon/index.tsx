import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image as Im,
  ImageBackground,
  ViewStyle,
} from 'react-native';
import Svg, {
  Polygon,
  ClipPath,
  Defs,
  Pattern,
  LinearGradient,
  Stop,
  Rect,
  Path,
  Circle,
} from 'react-native-svg';
import { Colors } from '$theme';
import styles from './styles';

interface HexagonProps {
  pic?: string;
  line?: number;
  index?: number;
  fillColor?: string
  styleParent?: ViewStyle
}

  const Hexagon = ({ line, index, pic, fillColor,styleParent }: HexagonProps) => {
  let im = Math.floor(Math.random() * 8);
  let defaultimage = require('$assets/images/default.jpg');
  return (
    <View style={[styles.hex, styleParent]}>
      <View style={[styles.image]}>
        <Im
          source={
            pic
              ? {
                  uri: pic,
                }
              : defaultimage
          }
          style={styles.image}
        />
      </View>
      <Svg height="120" width="120">
        <Defs>
          <Pattern
            id="pattern1"
            height="100%"
            width="100%"
            patternContentUnits="objectBoundingBox"></Pattern>

          <ClipPath id="clip">
            <Polygon points="111.96152422706632,90 60.00000000000001,120 8.038475772933694,90.00000000000003 8.038475772933673,30.000000000000018 59.999999999999986,0 111.96152422706632,30.00000000000002" />
          </ClipPath>
        </Defs>

        <Polygon
          x="0"
          y="0"
          points={'120,120 111.96152422706632,90 60.00000000000001,120'}
          fill={fillColor ? fillColor : Colors.PURPLE}
        />
        <Polygon
          x="0"
          y="0"
          points={'0,120 0,90 60.00000000000001,120'}
          fill={fillColor ? fillColor : Colors.PURPLE}
        />
        <Polygon
          x="0"
          y="0"
          points={'0,0 0,30.000000000000018  60.00000000000001,0'}
          fill={fillColor ? fillColor : Colors.PURPLE}
        />
        <Polygon
          x="0"
          y="0"
          points={'120,0 60,0  120,30'}
          fill={fillColor ? fillColor : Colors.PURPLE}
          />
          </Svg>
     
    </View>
  );
};
export default Hexagon;
 /*  <Svg width="105" height="116" viewBox="0 0 105 116">
        <Path
          fillRule="evenodd"
          fill={Colors.PURPLE}
          d="M 0 0 L 104 0 L 105 116 L 0 116 Z M 44.5 2.6 C 49.5 -0.2 55.5 -0.2 60.5 2.6 L 96.5 23.4 C 101.4 26.2 104.5 31.5 104.5 37.2 V 78.8 C 104.5 84.5 101.4 89.8 96.5 92.6 L 60.5 113.4 C 55.5 116.2 49.5 116.2 44.5 113.4 L 8.5 92.6 C 3.6 89.8 0.5 84.5 0.5 78.8 V 37.2 C 0.5 31.5 3.6 26.2 8.5 23.4 L 44.5 2.6 Z"
        />
      </Svg>*/