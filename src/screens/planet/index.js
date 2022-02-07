import { Planet } from '$components';

import React from 'react';
import { View } from 'react-native';
import { Canvas } from '@react-three/fiber/native';

const PlanetScreen = () => {
  return (
    <View style={{ flex: 1 }}>
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
