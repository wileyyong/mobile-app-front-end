import { Colors, Padding } from '$theme';
import React, { useEffect, useState } from 'react';
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
import { Pozzlers } from '$api';
import { useTranslation } from 'react-i18next';

interface SectionProps {
  item: any;
}
const PozzlersSection = ({ item }: SectionProps) => {
  let { t } = useTranslation();
  console.log(item, 'see pozzler\n');

  const [pozzles, setPozzles] = useState<any[]>([]);

  let avatar = require('src/assets/images/pozzlePilot.png');

  let getpozzles = async () => {
    try {
      let res = await Pozzlers.getPozzles(item._id);
      setPozzles(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    getpozzles();
  }, []);

  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={avatar} />
        <View>
          <Text style={styles.title}>{item.userName}</Text>
          <View style={styles.holderView}>
            <Hex />
            <Text style={styles.poztrasluscent}>
              {pozzles.length + t(` Pozzle${pozzles.length > 1 ? 's ' : ' '}`)}
            </Text>
          </View>
        </View>
      </View>
      <ScrollView horizontal style={styles.scroll}>
        <View>
          {pozzles.length >= 1 ? (
            <FlatList
              horizontal
              style={[styles.inner]}
              data={pozzles}
              renderItem={({ item }) => <Hexagon pic={item.muxThumbnail} />}
              keyExtractor={item => item._id}
            />
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};
export default PozzlersSection;
