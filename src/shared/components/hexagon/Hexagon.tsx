import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Svg, {
  Polygon,
  Image,
  Mask,
  ClipPath,
  Defs,
  Pattern,
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
  let im = Math.floor(Math.random()*8)
  return (
    <View>
      <Svg height="135" width="135">
        <Defs>
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
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="5"
          x="5"
          y="5"
          fill="url(#pattern1)"
        />
      </Svg>
    </View>
  );
};

export default Hexagon;

const styles = StyleSheet.create({
  bg: {
    width: 120,
    height: 120,
  },
});
