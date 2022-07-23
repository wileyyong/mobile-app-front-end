import {
  EXPLORER_TAB_SCREEN,
  PASSPORT_TAB_SCREEN,
  POZZLE_ACTIVITY_TAB_SCREEN,
} from '$constants';
import { MainTabs } from '$widgets';

import {
  View,
  Modal,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from 'react-native';

import {
  ExplorerTabScreen,
  PozzleActivityTabScreen,
  PassportTabScreen,
  DiscoveryScreen,
} from '$screens';
import styles from './styles';
import * as stylesDiscovery from '../../screens/discovery/styles';

import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from 'src/redux/modal/actions';

import { BlurView } from '@react-native-community/blur';
import { Colors } from '$theme';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
  BottomSheetView,
  SCREEN_HEIGHT,
} from '@gorhom/bottom-sheet';
import {
  PassportView,
  SettingsIcon,
  Text,
  BackupWallet,
  BackupWalletConfirmation,
  PozPouch,
  LocationSheet,
} from '$components';
import { useTranslation } from 'react-i18next';
import { CancelButton, ClearButton } from '$assets';
import { showLocationSheet } from 'src/redux/generic/actions';
import { setSignInUser, updateUserData } from 'src/redux/user/actions';
import { getLocationNameByGPS, translateGPStoLocation } from 'src/screens/pozzle-activity/utils';

const Tab = createMaterialTopTabNavigator();

const MainTabNavigator = ({ route }) => {
  const dispatch = useDispatch();
  const redux = useSelector(state => state.ProgressButtonRedux);
  const reduxGeneric = useSelector((state: any) => state.generic);
  const reduxPassport = useSelector(state => state.generic);
  const userRedux = useSelector(state => state.user);
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const { modal } = useSelector((state: any) => state.modal);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [focused, setFocused] = useState(false);
  const [tab, setTab] = useState<string>('activities');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showBackupModal, setShowBackupModal] = useState<boolean>(false);
  const [showMainBackupModal, setShowMainBackUpModal] =
    useState<boolean>(false);
  const [showPozPouch, setPozPouch] = useState<boolean>(false);

  const checktab = (tabs: string) => {
    setTab(tabs);
  };
  const handleChange = (text: string) => {
    setSearchQuery(text);
  };

  const customHandle = () => {
    return (
      <View style={styles.containerDiscovery}>
        <View style={stylesDiscovery.default.labelContainer}>
          <Text style={stylesDiscovery.default.toplabel}>
            {t('DiscoveryScreen.foryou')}
          </Text>
          <TouchableOpacity
            onPress={() => {
              dispatch(toggleModal());
            }}>
            <CancelButton height={14} width={14} />
          </TouchableOpacity>
        </View>
        <View style={stylesDiscovery.default.topbar}>
          <View style={stylesDiscovery.default.topwrapper}>
            {searchQuery.length > 0 ? (
              <TouchableHighlight
                underlayColor={Colors.TRANSPARENT}
                style={stylesDiscovery.default.clearbutton}
                onPress={() => setSearchQuery('')}>
                <ClearButton
                  height={8}
                  width={8}
                  fill={Colors.PURPLE}
                  stroke={Colors.PURPLE}
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
              placeholder={t('DiscoveryScreen.search')}
              placeholderTextColor={Colors.FIFTYPERCENTWHITE}
              style={
                !focused
                  ? stylesDiscovery.default.input
                  : stylesDiscovery.default.inputfocused
              }
              // value={searchQuery}
              // onChangeText={searchQuery}
              onEndEditing={e => handleChange(e.nativeEvent.text)}
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
                checktab('activities');
              }}>
              <Text style={stylesDiscovery.default.btntext}>
                {t('DiscoveryScreen.activities&poz')}
              </Text>
            </TouchableHighlight>
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
                checktab('pozzlers');
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

  useEffect(() => {
    if (!modal) {
      bottomSheetRef.current?.close();
    }
    setShowBackupModal(route.params?.showBackUpModal);
  }, [modal, redux.showPassportModal]);

  return (
    <>
      <Tab.Navigator
        initialRouteName={EXPLORER_TAB_SCREEN}
        tabBar={(props: any) => <MainTabs {...props} />}
        tabBarPosition="bottom"
        swipeEnabled={redux.recordingStatus === false}>
        <Tab.Screen
          component={PozzleActivityTabScreen}
          name={POZZLE_ACTIVITY_TAB_SCREEN}
          options={{ tabBarLabel: t('tabsScreen.record') }}
        />
        <Tab.Screen
          component={ExplorerTabScreen}
          name={EXPLORER_TAB_SCREEN}
          options={{ tabBarLabel: t('tabsScreen.discover') }}
        />
        <Tab.Screen
          component={PassportTabScreen}
          name={PASSPORT_TAB_SCREEN}
          options={{ tabBarLabel: t('tabsScreen.pozPouch') }}
        />
      </Tab.Navigator>
      {redux.hasModalOpen ? (
        <BlurView
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
          blurAmount={100}
          blurType={'dark'}
          overlayColor={Colors.SEVENTYPERCENTPURPLE}></BlurView>
      ) : (
        <></>
      )}

      {modal && (
        <BottomSheet
          backdropComponent={props => (
            <BottomSheetBackdrop
              {...props}
              appearsOnIndex={0}
              disappearsOnIndex={-1}
            />
          )}
          enablePanDownToClose
          keyboardBehavior="interactive"
          index={0}
          ref={bottomSheetRef}
          snapPoints={[Platform.OS === 'android' ? '90%' : SCREEN_HEIGHT * 0.9]}
          onClose={() => {
            dispatch(toggleModal());
          }}
          android_keyboardInputMode="adjustResize"
          handleComponent={customHandle}>
          <BottomSheetScrollView style={styles.bottomSheetView}>
            <DiscoveryScreen tab={tab} searchQuery={searchQuery} />
          </BottomSheetScrollView>
        </BottomSheet>
      )}

      {reduxPassport.showPassportModal && (
        <PassportView userId={reduxPassport.userId}></PassportView>
      )}

      {showBackupModal && (
        <BackupWalletConfirmation
          onButtonPress={() => {
            setShowBackupModal(!showBackupModal);
            setShowMainBackUpModal(true);
          }}
        />
      )}

      {showMainBackupModal && (
        <BackupWallet
          onButtonPress={() => {
            setShowMainBackUpModal(false);
            setShowBackupModal(false);
          }}
        />
      )}

      {showPozPouch && (
        <PozPouch
          onClose={() => {
            setPozPouch(false);
          }}
        />
      )}
      
      {reduxGeneric.showLocationSheet && 
        <LocationSheet
            show={true}
            onClose={() => {
              //setShowSheet(false);
              dispatch(showLocationSheet(false));
            }}
            setlocation={async (loc) => { 
              // update user location with Lat/Long and LocationName
              const locationName = await getLocationNameByGPS(loc.lat , loc.lng);
              dispatch(updateUserData({...userRedux.user,
                locationName:locationName, 
                location : {locationName:locationName, coordinates : [loc.lat , loc.lng]} 
              })); 
            }}
          />
      }
    </>
  );
};

export default MainTabNavigator;
