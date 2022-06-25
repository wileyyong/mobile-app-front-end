import {
  EXPLORER_TAB_SCREEN,
  PASSPORT_TAB_SCREEN,
  POZZLE_ACTIVITY_TAB_SCREEN,
} from '$constants';
import { MainTabs } from '$widgets';

import { View, Modal, SafeAreaView, Platform } from 'react-native';

import {
  ExplorerTabScreen,
  PozzleActivityTabScreen,
  PassportTabScreen,
  DiscoveryScreen,
} from '$screens';
import styles from './styles';
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
} from '@gorhom/bottom-sheet';
import { PassportView } from '$components';

const Tab = createMaterialTopTabNavigator();

const MainTabNavigator = () => {
  const dispatch = useDispatch();
  const customHandle = useCallback(() => <></>, []);
  const redux = useSelector(state => state.ProgressButtonRedux);
  const reduxPassport = useSelector(state => state.generic);
  const [showModal, setShowModal] = useState(false); 
  const { modal } = useSelector((state: any) => state.modal);
  const bottomSheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    if (!modal) {
      bottomSheetRef.current?.close();
      setShowModal(false);
    }else if(modal) {
      setShowModal(true);
    }
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
          options={{ tabBarLabel: 'Record' }}
        />
        <Tab.Screen
          component={ExplorerTabScreen}
          name={EXPLORER_TAB_SCREEN}
          options={{ tabBarLabel: 'Discover' }}
        />
        <Tab.Screen
          component={PassportTabScreen}
          name={PASSPORT_TAB_SCREEN}
          options={{ tabBarLabel: 'Tokens & Planets' }}
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

      { showModal &&
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
        snapPoints={[Platform.OS === 'android' ? '90%' : '80%']}
        onClose={() => {   dispatch(toggleModal()); }}
        android_keyboardInputMode="adjustResize"
        handleComponent={customHandle}>
        <BottomSheetScrollView style={styles.bottomSheetView}>
          <DiscoveryScreen />
        </BottomSheetScrollView>
      </BottomSheet>}

      {reduxPassport.showPassportModal && (
        <PassportView userId={reduxPassport.userId}></PassportView>
      )}
    </>
  );
};

export default MainTabNavigator;
