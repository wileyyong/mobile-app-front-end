import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Touchable,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Section from './Section';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Discovery = () => {
  const [data, setData] = useState<any[]>([]);
  const [tab, setTab] = useState<string>('activities');

  const checktab = (tabs: string) => {
    setTab(tabs);
  };
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
      <View style={styles.bg}>
        <Text style={styles.toplabel}>DISCOVER</Text>
        <View style={styles.topbar}>
          <TextInput
            placeholder="Search"
            placeholderTextColor={'white'}
            style={styles.input}
          />
          <View style={styles.btns}>
            <TouchableHighlight
              style={[styles.btn, tab === 'activities' && styles.active]}
              onPress={() => {
                checktab('activities');
              }}>
              <Text style={styles.btntext}>Activities and Pozzles</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.btn, tab === 'pozzlers' && styles.active]}
              onPress={() => {
                checktab('pozzlers');
              }}>
              <Text style={styles.btntext}>Pozzlers</Text>
            </TouchableHighlight>
          </View>
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
      </View>
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
  },
  input: {
    fontSize: 15,
    borderRadius: 16,
    padding: 16,
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: 'white',
    width: '100%',
  },
  topbar: {
    marginHorizontal: 10,
    // flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: 10,
  },
  bottombar: {
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
  bg: {
    flex: 1,
    backgroundColor: 'rgba(54, 37, 102, 1)',
    display: 'flex',
  },
  toplabel: {
    color: 'white',
    fontWeight: '900',
    transform: [{ scaleX: 1.5 }, { scaleY: 0.9 }],
    alignSelf: 'flex-start',
    marginBottom: 21,
    marginLeft: 40,
    marginTop: 21,
    fontSize: 24,
  },
  btns: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 12,
  },
  btn: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 12,
    width: '45%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
  },
  active: {
    borderWidth: 2,

    borderColor: 'white',
  },
  btncontainer: {},
  btntext: {
    color: 'white',
    fontSize: 14,
  },
});
