import {
  EXPLORER_TAB_SCREEN,
  PASSPORT_TAB_SCREEN,
  POZZLE_ACTIVITY_TAB_SCREEN,
} from '$constants';
import { MainTabs } from '$widgets';
import {
  ExplorerTabScreen,
  PozzleActivityTabScreen,
  PassportTabScreen,
  DiscoveryScreen,
} from '$screens';

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
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

const Tab = createMaterialTopTabNavigator();

const MainTabNavigator = () => {
  let dispatch = useDispatch();
  const redux = useSelector(state => state.ProgressButtonRedux);
  const { modal } = useSelector((state: any) => state.modal);
  const bottomSheetRef = useRef<BottomSheet>(null);
  useEffect(() => {
    if (!modal) {
      bottomSheetRef.current?.close();
    }
  }, [modal]);

  // variables
  const snapPoints = useMemo(() => ['50%', '100%'], []);

  // callbacks
  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1 && modal !== false) {
        dispatch(toggleModal());
      }
    },
    [modal],
  );

  return (
    <>
      <Tab.Navigator
        initialRouteName={VIDEO_SCREEN}
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
      {}
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
      {
        <BottomSheet
          enablePanDownToClose
          ref={bottomSheetRef}
          index={modal ? 0 : -1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <DiscoveryScreen />
        </BottomSheet>
      }
    </>
  );
};

export default MainTabNavigator;
