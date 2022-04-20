import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import Svg, {
  Rect,
  Circle,
  Path,
  Text as Tx,
  Image,
  ClipPath,
  Defs,
  Polygon,
  Pattern,
} from 'react-native-svg';
import Hexagon from "../../shared/components/hexagon/Hexagon"

interface SectionProps {
  item: any;
  index: number;
}
const Section = ({ item, index }: SectionProps) => {
  console.log(item);

  return (
    <View style={styles.section}>
      <View style={styles.number}>
        <Svg height="250" width="180">
          <Tx
            fill="none"
            strokeWidth={3}
            stroke="rgba(255,255,255,0.3)"
            fontSize="110"
            fontWeight="bold"
            x="30"
            y="90"
            textAnchor="start"
            fontFamily="sans-serif-condensed">
            {index + 1}
          </Tx>
        </Svg>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={[styles.title, styles.poz]}>
        {item.pozzles.length + ` Pozzle${item.pozzles.length > 1 ? 's ' : ' '}`}
        <Text style={styles.poztrasluscent}>2k Until Launch</Text>
      </Text>
      <ScrollView>
        {item.pozzles.map((poz: any, id: number) => (
          <Hexagon />
        ))}
      </ScrollView>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: 'white',
    marginLeft: 41,
    marginTop: 50,
    backgroundColor: 'transparent',
  },
  section: {
    width: '100%',
    paddingTop: 10,
    backgroundColor: 'transparent',
  },
  number: {
    zIndex: -2,
    position: 'absolute',
    left: 10,
    top: 3,
    transform: [{ scaleX: 1.4 }, { scaleY: 0.7 }],
  },
  poz: {
    fontSize: 12,
    marginTop: 1,
  },
  poztrasluscent: {
    color: 'rgba(255,255,255,0.5)',
  },
});
let r = {
  _id: '62470e61ff19a8e68d1239fe',
  isDeleted: false,
  createdOn: '2022-04-01T14:27:21.402Z',
  planetId: null,
};

let x = {
  _id: '625051e667cdd09a7aef3743',
  title: 'activity in melbournesss new111',
  createdBy: '62378a6da628db3f062e8a2a',
  isActive: false,
  pozzleCount: 1,
  POZpledged: 0,
  planetId: null,
  location: {
    type: 'Point',
    coordinates: [144.9579466, -37.8164662],
  },
  createdOn: '2022-04-08T15:15:21.609Z',
  isDeleted: false,
  __v: 0,
  pozzles: [
    {
      _id: '625051e667cdd09a7aef3745',
      activityId: '625051e667cdd09a7aef3743',
      planetId: null,
      errorStatus: 0,
      isActive: false,
      inspiredBy: null,
      videoSrc: 'https://muxed.s3.amazonaws.com/ink.mp4',
      viewCount: 1,
      muxAssetId: 'bGsnFUqxZa9aP9LgIlxMy4oQ5FUGOo01uUKt02R01rLsXY',
      muxPlaybackId: 'ZwhCosljYx734800FxTBqX8SLQeIkeQIgtCafmmKBHYY',
      muxThumbnail:
        'https://image.mux.com/ZwhCosljYx734800FxTBqX8SLQeIkeQIgtCafmmKBHYY/animated.gif?start=0',
      muxProcessing: true,
      processedVideoSrc:
        'https://stream.mux.com/ZwhCosljYx734800FxTBqX8SLQeIkeQIgtCafmmKBHYY.m3u8',
      vqs: 1,
      isReported: false,
      location: {
        type: 'Point',
        coordinates: [144.9579466, -37.8164662],
      },
      createdOn: '2022-04-08T15:15:21.605Z',
      isDeleted: false,
      createdBy: '62378a6da628db3f062e8a2a',
      __v: 0,
    },
  ],
};
