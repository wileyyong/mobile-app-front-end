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
import { CancelButton } from '$assets';

import { Activities, Pozzlers } from '$components';

import { Colors } from '$theme';

export interface DiscoveryScreenProps {
  navigation: any;
}

const Discovery = ({ navigation }: DiscoveryScreenProps) => {
  const [tab, setTab] = useState<string>('activities');

  const [searchQuery, setSearchQuery] = useState<string>('');

  const checktab = (tabs: string) => {
    setTab(tabs);
  };
  const handleChange = (text: string) => {
    setSearchQuery(text);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar hidden translucent={true} />
      <View style={styles.bg}>
        <View style={styles.labelContainer}>
          <Text style={styles.toplabel}>DISCOVER</Text>
          <CancelButton
            height={14}
            width={14}
            onPress={() => navigation.goBack()}
          />
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
            placeholderTextColor={Colors.FIFTYPERCENTWHITE}
            style={styles.input}
            value={searchQuery}
            onChangeText={handleChange}
          />
          <View style={styles.btns}>
            <TouchableHighlight
              style={
                tab === 'activities'
                  ? { ...styles.btnLeft, ...styles.active }
                  : { ...styles.btnLeft }
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
          {tab === 'activities' ? (
            <Activities search={searchQuery} />
          ) : (
            <Pozzlers search={searchQuery} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Discovery;
