import { Colors, Padding } from '$theme';
import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { Hexagon } from '$components';
import { Hex, PlanetIcon } from 'src/assets';
import styles from './styles';
import { useTranslation } from 'react-i18next';

interface SectionProps {
  item: any;
  query?: boolean;
}
const Section = ({ item, query }: SectionProps) => {
  let { t } = useTranslation();
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
        <Hex height={12} width={12} fill={Colors.OFFWHITE} />
        <Text style={styles.poztrasluscent}>
          {item.pozzles.length +
            t(
              ` ${
                item.pozzles.length > 1 ? 'foryou.pozzles' : 'foryou.pozzle'
              }`,
            )}
        </Text>
        <PlanetIcon height={12} width={12} fill={Colors.OFFWHITE} />
        <Text style={styles.poztrasluscent}>
          {t('foryou.planet')}{' '}
          {item['planetId'] !== null ? item['planetId'] : t('foryou.unknown')}
        </Text>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
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
