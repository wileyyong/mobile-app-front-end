import { EARTH_SCREEN, PLANET_SCREEN } from '$constants';
import { CosmicBackground, Text, VStack } from '$components';

import React, { useState,useEffect, useMemo, useRef, useCallback } from 'react';
import { Image, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DiscoveryScreen } from '$screens';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from 'src/redux/modal/actions';
import BottomSheet from '@gorhom/bottom-sheet';

import styles from './style';

const earth = require('src/assets/images/earth-icon.png');
const planet = require('src/assets/images/hexsphere-icon.png');

const planets = [
  {
    image: earth,
    name: 'earth',
    style: { left: 20, position: 'absolute', top: 200 },
    type: 'earth',
  },
  {
    image: planet,
    name: 'mars',
    style: { left: 200, position: 'absolute', top: 100 },
    type: 'planet',
  },
];

/**
 * These screen is only for show purpose,
 * and all implementations are dummy
 *
 */
function ExplorerScreen() {
  const { modal } = useSelector((state: any) => state.modal);
  const bottomSheetRef = useRef<BottomSheet>(null);
  useEffect(() => {
console.log(modal)
    
  }, [modal])

  // variables
  const snapPoints = useMemo(() => ['50%', '100%'], []);

  // callbacks
  const handleSheetChanges = useCallback(
    (index: number) => {
      console.log('handleSheetChanges', index);
    },
    [modal],
  );
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const toEarthScreen = () => navigation.navigate(EARTH_SCREEN);
  const toPlanetScreen = () => navigation.navigate(PLANET_SCREEN);

  const onPressPlanet = type => {
    if (type === 'earth') toEarthScreen();
    if (type === 'planet') toPlanetScreen();
  };

  return (
    <CosmicBackground>
      <VStack style={styles.content}>
        {planets.map((_planet, index) => (
          <TouchableOpacity
            key={index}
            style={_planet.style}
            onPress={() => {
              onPressPlanet(_planet.type);
            }}>
            <Image source={_planet.image} />
          </TouchableOpacity>
        ))}
      </VStack>

      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          dispatch(toggleModal());
        }}>
        <BottomSheet
          enablePanDownToClose
          ref={bottomSheetRef}
          index={modal ? 0 : -1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <DiscoveryScreen />
        </BottomSheet>
      </Modal> */}
    </CosmicBackground>
  );
}

export default ExplorerScreen;
