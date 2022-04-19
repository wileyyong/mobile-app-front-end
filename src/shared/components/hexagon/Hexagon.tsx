import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Svg, { Polygon, Image,Mask } from 'react-native-svg';

const Hexagon = () => {
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/icons/testimage.png')}
        style={styles.bg}></ImageBackground>
      
    </View>
  );
};

export default Hexagon;

const styles = StyleSheet.create({
  bg: {
    width: 120,
    height: 120,
  },
});
