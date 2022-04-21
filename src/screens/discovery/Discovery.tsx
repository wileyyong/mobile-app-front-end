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
  ActivityIndicator,
} from 'react-native';
import CosmicBackground from '../../shared/components/cosmic-background/index';
import ArrowDown from '../../assets/icons/arrow-down.svg';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Section from './Section';

const Discovery = () => {
  const [data, setData] = useState<any[]>([]);
  const getitems = async () => {
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

  useEffect(() => {
    getitems();
  }, []);

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
            <ArrowDown style={styles.caret} />
          </View>
          <View style={styles.bottombar}>
            {data.length !== 0 ? (
              <ScrollView style={styles.scroll}>
                {data.length > 0
                  ? data.map((item, index) => (
                      <Section key={Math.random()} item={item} index={index} />
                    ))
                  : null}
              </ScrollView>
            ) : (
              <View style={styles.activity}>
                <ActivityIndicator size={'large'} color="white" />
                <Text style={styles.text}>Fetching Pozzles...</Text>
              </View>
            )}
          </View>
        </ImageBackground>
      </CosmicBackground>
    </SafeAreaView>
  );
};

export default Discovery;

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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },
  caret: {
    marginTop: 13,
    width: 25,
    height: 25,
    transform: [{ scaleX: 1.0 }],
  },
  scroll: {
    flex: 1,
  },
  activity: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginTop: 20,
  },
});
