import { EARTH_SCREEN, PLANET_SCREEN } from '$constants';
import { AlphaOverlay, CosmicBackground, Text, VStack } from '$components';

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
 

  // variables
  const snapPoints = useMemo(() => ['50%', '100%'], []);


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
      <AlphaOverlay text={'POZZLEVERSE COMING SOON'}></AlphaOverlay>
    </CosmicBackground>
  );
}

export default ExplorerScreen;
