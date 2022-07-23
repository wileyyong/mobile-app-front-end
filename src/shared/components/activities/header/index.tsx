import React, { useEffect, useState } from 'react';
import { View, Text,TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { CloseIcon, CloseXIcon, Loader, Spacer } from '$components';
import { toggleModal } from 'src/redux/modal/actions';
import { t } from 'i18next';
import * as stylesDiscovery from '../../../../screens/discovery/styles';
import { Colors } from '$theme';
import { useDispatch } from 'react-redux';

interface DiscoveryHeaderProps {
  setSearchQuery: any 
  inputText: string
}

const DiscoveryHeader = ({ setSearchQuery, inputText }: DiscoveryHeaderProps) => {
  const dispatch = useDispatch(); 
  const [tab, setTab] = useState<string>('activities');
  const [searchQuery,_setSearchQuery] = useState('');


  useEffect(()=>{
    console.log('header', inputText, searchQuery);
    if(inputText != searchQuery) _setSearchQuery(inputText)

  },[inputText])
  return (
    <View style={styles.containerDiscovery}>
        <View style={stylesDiscovery.default.labelContainer}>
          <Text style={stylesDiscovery.default.toplabel}>
            {t('DiscoveryScreen.foryou')}
          </Text>
          <TouchableOpacity
            hitSlop={{top:20, bottom:20, right:20, left:20}}
            onPress={() => {
              dispatch(toggleModal());
            }}>
            <CloseXIcon height={16} width={16} color={Colors.WHITE} />
          </TouchableOpacity>
        </View>
        <View style={stylesDiscovery.default.topbar}>
          <View style={stylesDiscovery.default.topwrapper}>
            {searchQuery.length > 0 ? (
              <TouchableOpacity
              style={stylesDiscovery.default.clearbutton}
              onPress={() => {
                setSearchQuery('')
              }}>
              <CloseIcon color={Colors.WHITE} />
            </TouchableOpacity> 
            ) : null}
            <TextInput
              placeholder={t('DiscoveryScreen.search')}
              placeholderTextColor={Colors.FIFTYPERCENTWHITE}
              returnKeyType={'done'}
              style={
                searchQuery.length<=0
                  ? stylesDiscovery.default.input
                  : stylesDiscovery.default.inputfocused
              }
              value={searchQuery ? searchQuery : ''}
              onChangeText={text => {  
                console.log('onChangeText', text)
                _setSearchQuery(text);
              }}
              onSubmitEditing={()=>{
                console.log('onSubmitEditing', searchQuery)
                setSearchQuery(searchQuery);
              }}
            />
          </View>
          <View style={stylesDiscovery.default.btns}>
            <TouchableHighlight
              underlayColor={'transparent'}
              style={
                tab === 'activities'
                  ? {
                      ...stylesDiscovery.default.btnLeft,
                      ...stylesDiscovery.default.active,
                    }
                  : { ...stylesDiscovery.default.btnLeft }
              }
              onPress={() => {
                setTab('activities');
              }}>
              <Text style={stylesDiscovery.default.btntext}>
                {t('DiscoveryScreen.activities&poz')}
              </Text>
            </TouchableHighlight>
            <Spacer width={10}></Spacer>
            <TouchableHighlight
              underlayColor={'transparent'}
              style={
                tab != 'activities'
                  ? {
                      ...stylesDiscovery.default.btnLeft,
                      ...stylesDiscovery.default.active,
                    }
                  : stylesDiscovery.default.btnLeft
              }
              onPress={() => {
                setTab('pozzlers');
              }}>
              <Text style={stylesDiscovery.default.btntext}>
                {t('DiscoveryScreen.pozzlers')}
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
  );
};

export default DiscoveryHeader;

