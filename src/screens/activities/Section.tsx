import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

interface SectionProps {
  item: any;
  index: number;
}
const Section = ({ item, index }: SectionProps) => {
  console.log(item);

  return (
    <View style={styles.section}>
      <Text style={styles.number}>{index + 1}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={[styles.title, styles.poz]}>
        {item.pozzles.length + ` Pozzle${item.pozzles.length > 1 ? 's ' : ' '}`}
        <Text style={styles.poztrasluscent} >2k Until Launch</Text>
      </Text>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: 'white',
    marginLeft: 41,
    position: 'relative',
    marginTop: 30,
  },
  section: {
    width: '100%',
    paddingTop: 20,
  },
  number: {
    fontSize: 120,
    color: 'rgba(255,255,255,0.4)',
    zIndex: -2,
    position: 'absolute',
    left: 10,
    top: 3,
  },
  poz: {
    fontSize: 12,
    marginTop: 1,
  },
  poztrasluscent:{
    color: 'rgba(255,255,255,0.5)',
  }
});
let r = {
  _id: '62470e61ff19a8e68d1239fe',
  isDeleted: false,
  createdOn: '2022-04-01T14:27:21.402Z',
  planetId: null,
};
