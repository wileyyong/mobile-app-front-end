import { Padding } from '$theme';
import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { Hexagon } from '$components';
import Hex from '../../../assets/icons/hex.svg';
import Icon from '../../../assets/icons/planeticon.svg';
import styles from './styles';
import { CapitalizeEachWord } from './utils';
interface SectionProps {
  item: any;
  query?: boolean;
}
const Section = ({ item, query }: SectionProps) => {
  let len = item.pozzles.length;
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{CapitalizeEachWord(item.title)}</Text>
      <View style={styles.holderView}>
        <Hex color={'rgba(248,248,248,1)'} />
        <Text style={styles.poztrasluscent}>
          {item.pozzles.length +
            ` Pozzle${item.pozzles.length > 1 ? 's ' : ' '}`}
        </Text>
        <Icon color={'rgba(248,248,248,1)'} />
        <Text style={styles.poztrasluscent}>
          Planet {item['planetId'] !== null ? item['planetId'] : ' unknown'}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.container}
        style={styles.scroll}>
        <FlatList
          horizontal
          style={[styles.inner]}
          data={
            query
              ? item.pozzles
              : item.pozzles.slice(0, Math.max(3, Math.ceil(len / 2)))
          }
          renderItem={({ item }) => <Hexagon pic={item.muxThumbnail} />}
          keyExtractor={item => item._id}
        />
        {len > 3 && query == false ? (
          <FlatList
            horizontal
            style={[
              styles.inner,
              {
                position: 'relative',
                top: -25,
                paddingLeft: 68,
              },
            ]}
            data={item.pozzles.slice(Math.max(3, Math.ceil(len / 2)))}
            keyExtractor={item => item._id}
            renderItem={({ item }) => <Hexagon pic={item.muxThumbnail} />}
          />
        ) : null}
      </ScrollView>
    </View>
  );
};
export default Section;
