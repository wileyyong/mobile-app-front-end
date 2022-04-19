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
      <Text>{item.title}i</Text>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: 'green',
  },
  section: {
    width: '100%',
  },
  number: {
    fontSize: 34,
    color: 'white',
    zIndex: -2,
    position: 'absolute',
    left: 0,
  },
});
