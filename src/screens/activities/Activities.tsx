import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  TextInput,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg from 'react-native-svg';
import CosmicBackground from '../../shared/components/cosmic-background/index';
//import {  } from 'react-native-gesture-handler';
import ArrowDown from '../../shared/components/icons/arrow-down';
import Hexagon from 'src/shared/components/hexagon/Hexagon';
import { scale } from 'src/shared/theme/scaling';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Section from './Section';
import resarray from './costants';

const Activities = () => {
  const [data, setData] = useState<any[]>(resarray);
  const getitems = async () => {
    let res = await AsyncStorage.getItem('persist:root');
    console.log(res);
    try {
      let response = await axios.get(
        'https://testapi.pozzleplanet.com/v1/activities',
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjM3OGE2ZGE2MjhkYjNmMDYyZThhMmEiLCJ3YWxsZXRBZGRyZXNzIjoiMHhlMGU2ZEUxM2VmNDA2MDA0NGUxRDk1NTMxN2I0ZEVhYUI3NDAxNmMxIiwiaWF0IjoxNjUwMTYzMDkzLCJleHAiOjE2NTE0NTkwOTN9.Zb8u5gpCvhweXT7nDpsU0lScX5FjOxcbfxMvXrtUT_Q',
          },
        },
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   getitems();
  // }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar hidden />
      <CosmicBackground>
        <ImageBackground
          source={require('../../assets/images/purpleGradient.png')}
          imageStyle={{ opacity: 0.1 }}
          style={styles.purplebg}>
          <View style={styles.topbar}>
            <TextInput
              placeholder="Search"
              placeholderTextColor="rgba(255,255,255,0.8)"
              style={styles.input}
            />
            <Image
              source={require('../../assets/images/caret-down.png')}
              style={styles.caret}
            />
            {/* <ArrowDown style={styles.caret} size={89} color="#a592aa" /> */}
          </View>
          <View style={styles.bottombar}>
            {/* <Hexagon /> */}
            {/* <FlatList
              data={data}
              renderItem={Section}
              keyExtractor={item => item._id}
            /> */}
            <ScrollView style={styles.scroll}>
              {data.length > 0
                ? data.map((item, index) => (
                    <Section key={Math.random()} item={item} index={index} />
                  ))
                : null}
            </ScrollView>
          </View>
        </ImageBackground>
      </CosmicBackground>
    </SafeAreaView>
  );
};

export default Activities;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  purplebg: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  input: {
    color: 'white',
    fontSize: 24,
    flex: 1,
  },
  topbar: {
    marginTop: 25,
    marginHorizontal: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottombar: {
    backgroundColor: '#362566',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },
  caret: {
    marginTop: 13,
    width: 25,
    height: 25,
    transform: [{ scaleX: 1.2 }],
  },
  scroll: {
    flex: 1,
  },
});
