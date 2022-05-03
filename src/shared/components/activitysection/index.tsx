import { Colors, Padding } from '$theme';
import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { Hexagon } from '$components';
import { Hex, PlanetIcon } from 'src/assets';

import styles from './styles';
// import { CapitalizeEachWord } from './utils';

interface SectionProps {
  item: any;
  query?: boolean;
}
const Section = ({ item, query }: SectionProps) => {
  let len = item.pozzles.length;
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.holderView}>
        <Hex color={'rgba(248,248,248,1)'} />
        <Text style={styles.poztrasluscent}>
          {item.pozzles.length +
            ` Pozzle${item.pozzles.length > 1 ? 's ' : ' '}`}
        </Text>
        <PlanetIcon color={Colors.OFFWHITE} />
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
              {item.pozzles
                .slice(0, Math.max(3, Math.ceil(len / 2)))
                .map((pz: any, id: number) => (
                  <Hexagon key={id} pic={pz.muxThumbnail} />
                ))}
            </View>
            {len > 3 && query == false ? (
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
                  .map((pz: any, id: number) => (
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
