import { Planet, CosmicBackground, OrbitControlsView } from '$components';
import {
  PLANET_CONTROL_MIN_ZOOM,
  PLANET_CONTROL_MAX_ZOOM,
  PLANET_CONTROL_MIN_POLAR_ANGLE,
  PLANET_CONTROL_MAX_POLAR_ANGLE,
} from '$constants';

import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber/native';
import { Camera } from 'three';
import { useTranslation } from 'react-i18next';

import { Header } from './sections';
import { mockTitle } from './utils';

const PlanetScreen = () => {
  const orbitControlRef = useRef(null);
  const { t } = useTranslation();
  const [camera, setCamera] = useState<Camera>();

  // Todo:
  const title = t('planet.header.title', { id: mockTitle.planetId });
  const subtitle = t('planet.header.subtitle', { percent: mockTitle.percent });

  useEffect(() => {
    if (orbitControlRef.current) {
      const control = orbitControlRef.current.getControls();

      if (control) {
        control.enableDamping = true;
        control.minDistance = PLANET_CONTROL_MIN_ZOOM;
        control.maxDistance = PLANET_CONTROL_MAX_ZOOM;
        control.minPolarAngle = PLANET_CONTROL_MIN_POLAR_ANGLE;
        control.maxPolarAngle = PLANET_CONTROL_MAX_POLAR_ANGLE;
      }
    }
  }, [camera]);

  return (
    <CosmicBackground>
      <OrbitControlsView camera={camera} ref={orbitControlRef} style={{ flex: 1 }}>
        <Canvas onCreated={({ camera }) => setCamera(camera)}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Planet position={[0, 0, 0]} size={1} speed={1} />
        </Canvas>
      </OrbitControlsView>
      <Header subtitle={subtitle} title={title} />
    </CosmicBackground>
  );
};

export default PlanetScreen;
