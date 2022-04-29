import { Padding } from '$theme';
import React,{useEffect} from 'react';
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
import Hex from '../../../assets/icons/hex.svg';
import Icon from '../../../assets/icons/planeticon.svg';
import styles from './styles';
// import { CapitalizeEachWord } from './utils';
import axios from "axios"
interface SectionProps {
  item: any;
}
const PozzlersSection = ({ item }: SectionProps) => {
  let len = item.pozzles.length;

  const getUserName = async()=>{

try {
  let res = await axios.get(``)
  console.log(res)
} catch (error) {
  console.log(error)
}

  }
useEffect(() => {
 getUserName()
}, [])


  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={require("../../../assets/images/pozzlePilot.png")} />
        <View>
          <Text style={styles.title}>{item.pozzler}</Text>
          <View style={styles.holderView}>
            <Hex color={'rgba(248,248,248,1)'} />
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
