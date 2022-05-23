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
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import styles from './styles';
import { CancelButton, ClearButton } from '$assets';
import { useTranslation } from 'react-i18next';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';

import { Activities, Pozzlers } from '$components';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from 'src/redux/modal/actions';

import { Colors } from '$theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ExplorerStackParamList } from 'src/navigation/stack-navigators';

export interface DiscoveryScreenProps {
  navigation?: NativeStackNavigationProp<ExplorerStackParamList>;
  close?: () => void;
}

const Discovery = ({ close }: DiscoveryScreenProps) => {
  const [focused, setFocused] = useState(false);
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
    <View style={styles.screen}>
      <StatusBar hidden translucent={true} />
      <View style={styles.bg}>
        <View style={styles.labelContainer}>
          <Text style={styles.toplabel}>{t('foryou.foryou')}</Text>
          <CancelButton
            height={14}
            width={14}
            onPress={() => {
              dispatch(toggleModal());
            }}
          />
        </View>
        <View style={styles.topbar}>
          <View style={styles.topwrapper}>
            {searchQuery.length > 0 ? (
              <TouchableHighlight
                underlayColor={'transparent'}
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
              onBlur={() => {
                setFocused(false);
              }}
              onFocus={() => {
                setFocused(true);
              }}
              placeholder={t('foryou.search')}
              placeholderTextColor={Colors.FIFTYPERCENTWHITE}
              style={!focused ? styles.input : styles.inputfocused}
              value={searchQuery}
              onChangeText={handleChange}
            />
          </View>
          <View style={styles.btns}>
            <TouchableHighlight
              underlayColor={'transparent'}
              style={
                tab === 'activities'
                  ? { ...styles.btnLeft, ...styles.active }
                  : { ...styles.btnLeft }
              }
              onPress={() => {
                checktab('activities');
              }}>
              <Text style={styles.btntext}>{t('foryou.activities&poz')}</Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'transparent'}
              style={
                tab != 'activities'
                  ? { ...styles.btnLeft, ...styles.active }
                  : styles.btnLeft
              }
              onPress={() => {
                checktab('pozzlers');
              }}>
              <Text style={styles.btntext}>{t('foryou.pozzlers')}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={styles.bottombar}>
          {tab === 'activities' ? (
            <Activities search={searchQuery} />
          ) : (
            <Pozzlers search={searchQuery} />
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default Discovery;
