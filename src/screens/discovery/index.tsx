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

import { Activities, PassportView, Pozzlers } from '$components';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from 'src/redux/modal/actions';

import { Colors } from '$theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ExplorerStackParamList } from 'src/navigation/stack-navigators';

export interface DiscoveryScreenProps {
  navigation?: NativeStackNavigationProp<ExplorerStackParamList>;
  close?: () => void;
  tab: string;
  searchQuery: string;
}

const Discovery = ({ close, tab, searchQuery }: DiscoveryScreenProps) => {
  const [_searchQuery, setSearchQuery] = useState('');
  useEffect(()=>{
    setSearchQuery(searchQuery)
  },[searchQuery])
 
  return (  
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.bottombar}>
        {tab === 'activities' ? (
          <Activities search={_searchQuery} />
        ) : (
          <Pozzlers search={_searchQuery} />
        )}
      </ScrollView>
  );
};

export default Discovery;
