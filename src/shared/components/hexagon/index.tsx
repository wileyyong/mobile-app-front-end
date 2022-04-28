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
  ClipPath,
  Defs,
  Pattern,
  LinearGradient,
  Stop,
  Rect,
  Circle,
} from 'react-native-svg';
import ForeignObject from 'react-native-svg';
import Border from '../../../assets/icons/polygon.svg';
import MaskedView from '@react-native-community/masked-view';
import styles from "./styles"

interface HexagonProps {
  pic?: string;
  line?: number;
  index?: number;
}

const Hexagon = ({ line, index, pic }: HexagonProps) => {
  let im = Math.floor(Math.random() * 8);
  return (
    <View style={styles.hex}>
      {/* <Border style={styles.polygon} /> */}
      <Im
        source={
          pic
            ? {
                uri: pic,
              }
            : require('../../../assets/images/default.jpg')
        }
        style={styles.image}
      />
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
          fill={'rgba(54, 37, 102, 1)'}
        />
        <Polygon
          x="0"
          y="0"
          points={'0,120 0,90 60.00000000000001,120'}
          fill={'rgba(54, 37, 102, 1)'}
        />
        <Polygon
          x="0"
          y="0"
          points={'0,0 0,30.000000000000018  60.00000000000001,0'}
          fill={'rgba(54, 37, 102, 1)'}
        />
        <Polygon
          x="0"
          y="0"
          points={'120,0 60,0  120,30'}
          fill={'rgba(54, 37, 102, 1)'}
        />
      </Svg>
    </View>
  );
};

export default Hexagon;

