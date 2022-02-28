import { Planet, CosmicBackground } from '$components';
import { PASSPORT_INFO } from '$constants';

import React, { useRef, useState } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Canvas } from '@react-three/fiber/native';
import OrbitControlsView from 'expo-three-orbit-controls';

import { INavigationProps } from '../../navigation/index';

const SettingsImage = require('$assets/settings.png');

const PlanetScreen = ({ navigation }: INavigationProps) => {
  const orbitControlRef = useRef(null);
  const [camera, setCamera] = useState(null);

  return (
    <CosmicBackground>
      <TouchableOpacity
        style={{ marginTop: 50, position: 'absolute', right: 0, zIndex: 1000 }}
        onPress={() => navigation?.navigate(PASSPORT_INFO)}
      >
        <Image source={SettingsImage} />
      </TouchableOpacity>
      <OrbitControlsView camera={camera} ref={orbitControlRef} style={{ flex: 1 }}>
        <Canvas onCreated={({ camera }) => setCamera(camera)}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Planet position={[0, 0, 0]} size={1} speed={1} />
        </Canvas>
      </OrbitControlsView>
    </CosmicBackground>
  );
};

export default PlanetScreen;
