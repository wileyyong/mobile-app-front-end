import { Colors, Padding } from '$theme';
import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { Hexagon } from '$components';
import { Hex, PlanetIcon } from 'src/assets';
import styles from './styles';

interface SectionProps {
  item: any;
  query?: boolean;
}
const Section = ({ item, query }: SectionProps) => {
  console.log(item, "option item")
  let len = item.pozzles.length;
  let breakpoint = 3;
  const sliceItem = (part?: string) => {
    return part === 'first'
      ? item.pozzles.slice(0, Math.max(breakpoint, Math.ceil(len / 2)))
      : item.pozzles.slice(Math.max(breakpoint, Math.ceil(len / 2)));
  };
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.holderView}>
        <Hex />
        <Text style={styles.poztrasluscent}>
          {item.pozzles.length +
            ` Pozzle${item.pozzles.length > 1 ? 's ' : ' '}`}
        </Text>
        <PlanetIcon  />
        <Text style={styles.poztrasluscent}>
          Planet {item['planetId'] !== null ? item['planetId'] : ' unknown'}
        </Text>
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={styles.container}
        style={styles.scroll}>
        {query ? (
          <FlatList
            horizontal
            style={[styles.inner]}
            data={item.pozzles}
            renderItem={({ item }) => <Hexagon pic={item.muxThumbnail} />}
            keyExtractor={item => item._id}
          />
        ) : (
          <View>
            <View style={[styles.inner]}>
              {sliceItem('first').map((pz: any, id: number) => (
                <Hexagon key={id} pic={pz.muxThumbnail} />
              ))}
            </View>
            {len > breakpoint && query == false ? (
              <View style={[styles.inner, styles.innerext]}>
                {sliceItem().map((pz: any, id: number) => (
                  <Hexagon key={id} pic={pz.muxThumbnail} />
                ))}
              </View>
            ) : null}
          </View>
        )}
      </ScrollView>
    </View>
  );
};
export default Section;
