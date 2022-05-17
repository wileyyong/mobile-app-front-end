import { EARTH_SCREEN, PLANET_SCREEN } from '$constants';
import { CosmicBackground, Text, VStack } from '$components';

import React, { useState } from 'react';
import { Image, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DiscoveryScreen } from '$screens';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from 'src/redux/modal/actions';

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
  const navigation = useNavigation();
  const redux = useSelector((state: any) => state.modal);
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

      <Modal
        animationType="slide"
        transparent={false}
        visible={redux.modal}
        onRequestClose={() => {
          dispatch(toggleModal());
        }}>
        <DiscoveryScreen />
      </Modal>
    </CosmicBackground>
  );
}

export default ExplorerScreen;
