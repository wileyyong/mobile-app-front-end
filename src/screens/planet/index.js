import { Planet, CosmicBackground } from '$components';

import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber/native';
import OrbitControlsView from 'expo-three-orbit-controls';

const PlanetScreen = () => {
  const orbitControlRef = useRef(null);
  const [camera, setCamera] = useState(null);

  return (
    <CosmicBackground>
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
