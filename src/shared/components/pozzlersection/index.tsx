import { Colors, Padding } from '$theme';
import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import Svg, { Text as Tx } from 'react-native-svg';
import { Hexagon } from '$components';
import Hex from 'src/assets/icons/hex.svg';
import styles from './styles';

interface SectionProps {
  item: any;
}
const PozzlersSection = ({ item }: SectionProps) => {
  let len = item.pozzles.length;
  let avatar = require('src/assets/images/pozzlePilot.png');
  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={avatar} />
        <View>
          <Text style={styles.title}>{item.pozzler}</Text>
          <View style={styles.holderView}>
            <Hex  />
            <Text style={styles.poztrasluscent}>
              {len + ` Pozzle${len > 1 ? 's ' : ' '}`}
            </Text>
          </View>
        </View>
      </View>
      <ScrollView horizontal style={styles.scroll}>
        <View>
          <FlatList
            horizontal
            style={[styles.inner]}
            data={item.pozzles}
            renderItem={({ item }) => <Hexagon pic={item.muxThumbnail} />}
            keyExtractor={item => item._id}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default PozzlersSection;
