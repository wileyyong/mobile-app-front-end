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
import { CancelButton , ClearButton} from '$assets';
import { useTranslation } from 'react-i18next';

import { Activities, Pozzlers } from '$components';
import { useSelector, useDispatch } from 'react-redux';
import {toggleModal} from "src/redux/modal/actions"

import { Colors } from '$theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ExplorerStackParamList } from 'src/navigation/stack-navigators';


export interface DiscoveryScreenProps {
  navigation?: NativeStackNavigationProp<ExplorerStackParamList>;
  close?:()=>void
}

const Discovery = ({ close}: DiscoveryScreenProps) => {


  const redux = useSelector((state: any) => state.modal);
  const dispatch = useDispatch();
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
            onPress={() => dispatch(toggleModal())}
          />
        </View>
        <View style={styles.topbar}>
          {searchQuery.length > 0 ? (
            <TouchableHighlight
              style={styles.clearbutton}
              onPress={() => setSearchQuery('')}>
              <ClearButton
                height={8}
                width={8}
                fill="#362566"
                stroke={'#362566'}
                
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
