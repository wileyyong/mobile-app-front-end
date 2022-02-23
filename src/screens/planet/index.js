import { Planet } from '$components';

import React, { useRef, useState} from 'react';
import { Canvas } from '@react-three/fiber/native';
import OrbitControlsView from 'expo-three-orbit-controls';

const PlanetScreen = () => {
  const orbitControlRef = useRef(null);
  const [camera, setCamera] = useState(null);

  return (
    <OrbitControlsView camera={camera} ref={orbitControlRef} style={{ flex: 1 }}>
      <Canvas onCreated={({ camera }) => setCamera(camera)}>
        <color args={['#000']} attach="background" />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Planet position={[0, 0, 0]} size={1} speed={1} />
      </Canvas>
    </OrbitControlsView>
  );
};

export default PlanetScreen;
