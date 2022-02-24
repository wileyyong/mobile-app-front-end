import { Button, Planet, Text } from '$components';

import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { Canvas } from '@react-three/fiber/native';

import { PASSPORT_INFO } from '$constants';

const SettingsImage = require('$assets/settings.png');

const PlanetScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{ marginTop: 50, position: 'absolute', right: 0, zIndex: 1000 }}
        onPress={() => navigation.navigate(PASSPORT_INFO)}
      >
        <Image source={SettingsImage} />
      </TouchableOpacity>
      <Canvas>
        <color args={['#000']} attach="background" />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Planet position={[0, 0, 0]} size={1} speed={1} />
      </Canvas>
    </View>
  );
};

export default PlanetScreen;
