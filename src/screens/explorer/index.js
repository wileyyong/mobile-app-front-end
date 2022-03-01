import { EARTH_SCREEN, PLANET_SCREEN } from '$constants';
import { CosmicBackground, VStack } from '$components';

import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './style';

const earth = require('$assets/earth-icon.png');
const planet = require('$assets/hexsphere-icon.png');

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

  const toEarthScreen = () => navigation.navigate(EARTH_SCREEN);
  const toPlanetScreen = () => navigation.navigate(PLANET_SCREEN);

  const onPressPlanet = (type) => {
    if (type === 'earth') toEarthScreen();
    if (type === 'planet') toPlanetScreen();
  };

  return (
    <CosmicBackground>
      <VStack style={styles.content}>
        {planets.map((_planet) => (
          <TouchableOpacity
            style={_planet.style}
            onPress={() => {
              onPressPlanet(_planet.type);
            }}
          >
            <Image source={_planet.image} />
          </TouchableOpacity>
        ))}
      </VStack>
    </CosmicBackground>
  );
}

export default ExplorerScreen;
