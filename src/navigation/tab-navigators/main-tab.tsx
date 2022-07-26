import {
  ASYNC_STORAGE_LOCATION_KEY,
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
import { toggleModal, togglePozPouch } from 'src/redux/modal/actions';

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
  CloseXIcon,
  Spacer,
  CloseIcon,
  AlphaOverlay,
} from '$components';
import { useTranslation } from 'react-i18next';
import { showLocationSheet } from 'src/redux/generic/actions';
import { setSignInUser, updateUserData } from 'src/redux/user/actions';
import { getLocationNameByGPS, translateGPStoLocation } from 'src/screens/pozzle-activity/utils';
import DiscoveryHeader from 'src/shared/components/activities/header';
import { setItemToStorage } from '$utils';

const Tab = createMaterialTopTabNavigator();

const MainTabNavigator = ({ route }) => {
  const dispatch = useDispatch();
  const redux = useSelector(state => state.ProgressButtonRedux);
  const reduxGeneric = useSelector((state: any) => state.generic);
  const reduxPassport = useSelector(state => state.generic);
  const userRedux = useSelector(state => state.user);
  const { t } = useTranslation();
  const { modal, pozPouchModal } = useSelector((state: any) => state.modal);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [tab, setTab] = useState<string>('activities');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showBackupModal, setShowBackupModal] = useState<boolean>(false);
  const [showMainBackupModal, setShowMainBackUpModal] =
    useState<boolean>(false);
  const [showPozPouch, setPozPouch] = useState<boolean>(false);

  const checktab = (tabs: string) => {
    setTab(tabs);
  };

  const customHandle = () => {
    return (
      <DiscoveryHeader inputText={searchQuery} setSearchQuery={(text)=>{ setSearchQuery(text); }} ></DiscoveryHeader>
    );
  };

  useEffect(() => {
    if (!modal) {
      bottomSheetRef.current?.close();
    } else {
      setSearchQuery('')
    }
    setShowBackupModal(route.params?.showBackUpModal);
  }, [modal, redux.showPassportModal]);

  return (
    <>
      <Tab.Navigator
        initialRouteName={EXPLORER_TAB_SCREEN}
        tabBar={(props: any) => <MainTabs {...props} />}
        tabBarPosition="bottom"
        swipeEnabled={redux.recordingStatus === false || redux.file === false || redux.file === undefined }>
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
          <AlphaOverlay text=''></AlphaOverlay>
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
          android_keyboardInputMode="adjustPan"
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

      {pozPouchModal && (
        <PozPouch
          onClose={() => {
            setPozPouch(false);
            dispatch(togglePozPouch())
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
              setItemToStorage(ASYNC_STORAGE_LOCATION_KEY,JSON.stringify({lat: loc.lat ,long: loc.lng}))
            }}
          />
      }
    </>
  );
};

export default MainTabNavigator;
