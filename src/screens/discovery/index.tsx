import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  FlatList,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';
import styles from './styles';
import CancelButton from '../../assets/icons/cancel.svg';

import { ConsiderRender } from "$components";
import { Activities, Pozzlers } from '$api';

import { filterActivities, filterPozzlers, getPozzlers, DiscoveryScreenProps } from './utils';



const Discovery = ({navigation}:DiscoveryScreenProps) => {
  const [data, setData] = useState<any[]>([]);
  const [tab, setTab] = useState<string>('activities');
  const [filtered, setFiltered] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [pozzlers, setPozzlers] = useState<any[]>([]);
  const [pozfilter, setPozfilter] = useState<any[]>([]);
  const [fetching, setFetching] = useState(true);
  const checktab = (tabs: string) => {
    setTab(tabs);
  };
  const handleChange = (text: string) => {
    setSearchQuery(text);
  };

  const getActivities = async () => {
    try {
      let response = await Activities.get({ page: 1 });

      setData(state => response.data);
      setPozzlers(state => getPozzlers(response.data));
      setFiltered(response.data);
      setPozfilter(state => getPozzlers(response.data));
      setFetching(false);
    } catch (error) {
      console.log(error);
      setFetching(false);
    }
  };

  useEffect(() => {
    getActivities();
  }, []);

  useEffect(() => {
    setFiltered(filter => filterActivities(data, searchQuery));
  }, [searchQuery]);
  useEffect(() => {
    setPozfilter(poz => getPozzlers(filtered));
  }, [filtered]);
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar hidden translucent={true} />
      <View style={styles.bg}>
        <View style={styles.labelContainer}>
        <Text style={styles.toplabel}>DISCOVER</Text>
        <CancelButton height={14} width={14} onPress={()=>navigation.goBack()} />
        </View>
        <View style={styles.topbar}>
          {searchQuery.length > 0 ? (
            <TouchableHighlight
              style={styles.clearbutton}
              onPress={() => setSearchQuery('')}>
              <CancelButton
                height={8}
                width={8}
                fill="#362566"
                stroke={'#362566'}
                strokeWidth={2}
              />
            </TouchableHighlight>
          ) : null}
          <TextInput
            placeholder="Search"
            placeholderTextColor={'rgba(255,255,255,0.5)'}
            style={styles.input}
            value={searchQuery}
            onChangeText={handleChange}
          />
          <View style={styles.btns}>
            <TouchableHighlight
              style={
                tab === 'activities'
                  ? { ...styles.btn, ...styles.active, marginRight: 8 }
                  : { ...styles.btn, marginRight: 8 }
              }
              onPress={() => {
                checktab('activities');
              }}>
              <Text style={styles.btntext}>Activities and Pozzles</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={
                tab != 'activities'
                  ? { ...styles.btn, ...styles.active }
                  : styles.btn
              }
              onPress={() => {
                checktab('pozzlers');
              }}>
              <Text style={styles.btntext}>{'Pozzlers'}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.bottombar}>
          {fetching ? (
            <View style={styles.activity}>
              <ActivityIndicator size={'large'} color="white" />
              <Text style={styles.text}>Fetching Pozzles...</Text>
            </View>
          ) : (
            ConsiderRender(filtered, searchQuery, tab, pozfilter)
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Discovery;

