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
      {/* <Border style={styles.polygon} /> */}
      <Im
        source={{
          uri: pic
            ? pic
            : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1610878180933-123728745d22%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%253D%253D%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcanada-nature&tbnid=GzBlAT1pJdNniM&vet=12ahUKEwjruJb8gav3AhUDphoKHbcSAhMQMygAegUIARDcAQ..i&docid=F99EUUSxga2XkM&w=1000&h=750&q=image&hl=en&ved=2ahUKEwjruJb8gav3AhUDphoKHbcSAhMQMygAegUIARDcAQ',
        }}
        style={styles.image}
      />
      <Svg height="120" width="120">
        <Defs>
          {/* <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor="#B18FB5" stopOpacity="0.8" />
            <Stop offset="1" stopColor="#CAA7D1" stopOpacity=".9" />
          </LinearGradient> */}
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
  image: {
    width: 102,
    height: 120,
    padding: 10,
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: -1,
  },
});
{
  /* <Pattern
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
        </Pattern> */
}
{
  /* <Polygon
                points="111.96152422706632,90 60.00000000000001,120 8.038475772933694,90.00000000000003 8.038475772933673,30.000000000000018 59.999999999999986,0 111.96152422706632,30.00000000000002"
                x="0"
                y="0"
                fill="black"
              /> */
}
