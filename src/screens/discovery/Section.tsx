import { Padding } from '$theme';
import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import Svg, { Text as Tx } from 'react-native-svg';
import Hexagon from '../../shared/components/hexagon/Hexagon';

interface SectionProps {
  item: any;
  index: number;
}
const Section = ({ item, index }: SectionProps) => {
  console.log(item);
  let len = item.pozzles.length;

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
      <ScrollView horizontal style={styles.scroll}>
        <View>
          <View style={styles.inner}>
            {item.pozzles
              .slice(0, Math.max(3, Math.ceil(len / 2)))
              .map((poz: any, id: number) => (
                <Hexagon pic={poz.muxThumbnail} />
              ))}
          </View>
          {len > 3 ? (
            <View
              style={[
                styles.inner,
                {
                  position: 'relative',
                  top: -25,
                  paddingLeft: 68,
                },
              ]}>
              {item.pozzles
                .slice(Math.max(3, Math.ceil(len / 2)))
                .map((poz: any, id: number) => (
                  <Hexagon index={id} pic={poz.muxThumbnail} />
                ))}
            </View>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: 'white',
    marginLeft: 48,
    marginTop: 20,
    backgroundColor: 'transparent',
  },
  section: {
    width: '100%',
    paddingTop: 10,
    backgroundColor: 'transparent',
    marginBottom: -20,
    fontWeight: 'bold',
  },
  number: {
    zIndex: -2,
    position: 'absolute',
    left: 10,
    top: -20,
    transform: [{ scaleX: 1.4 }, { scaleY: 0.7 }],
  },
  poz: {
    fontSize: 12,
    marginTop: 1,
  },
  poztrasluscent: {
    color: 'rgba(255,255,255,0.5)',
  },
  inner: {
    display: 'flex',
    flexDirection: 'row',
  },
  scroll: {
    paddingTop: 0,
  },
});

//sam
