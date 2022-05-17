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
import { useTranslation } from 'react-i18next';

import { Activities, Pozzlers } from '$components';

import { Colors } from '$theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ExplorerStackParamList } from 'src/navigation/stack-navigators';

export interface DiscoveryScreenProps {
  navigation: NativeStackNavigationProp<ExplorerStackParamList>;
}

const Discovery = ({ navigation }: DiscoveryScreenProps) => {
  const { t } = useTranslation();
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
          <Text style={styles.toplabel}>{t('DISCOVER')}</Text>
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
                strokeWidth={0}
              />
            </TouchableHighlight>
          ) : null}
          <TextInput
            placeholder={t('Search')}
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
              <Text style={styles.btntext}>{t('Activities and Pozzles')}</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={
                tab != 'activities'
                  ? { ...styles.btnLeft, ...styles.active }
                  : styles.btnLeft
              }
              onPress={() => {
                checktab('pozzlers');
              }}>
              <Text style={styles.btntext}>{t('Pozzlers')}</Text>
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
