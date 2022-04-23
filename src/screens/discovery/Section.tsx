import { Padding } from '$theme';
import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import Svg, { Text as Tx } from 'react-native-svg';
import Hexagon from '../../shared/components/hexagon/Hexagon';
import Hex from '../../assets/icons/hex.svg';
import Icon from '../../assets/icons/planeticon.svg';

interface SectionProps {
  item: any;
  index: number;
}
const Section = ({ item, index }: SectionProps) => {
  console.log(item);
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
        <Icon color={'rgba(248,248,248,1)'} />
        <Text style={styles.poztrasluscent}>
          Planet {item["planetId"] !==null ? item["planetId"] : ' unknown'}
        </Text>
      </View>

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
    marginLeft: 16,
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
    color: 'rgba(248,248,248,1)',
    display: 'flex',
  },
  poztrasluscent: {
    color: 'rgba(248,248,248,0.7)',
    marginHorizontal:4
  },
  inner: {
    display: 'flex',
    flexDirection: 'row',
  },
  scroll: {
    paddingTop: 0,
  },
  icon: {
    color: 'rgba(248,248,248,1)',
  },
  holderView:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    marginLeft:16
  }
});

//sam
