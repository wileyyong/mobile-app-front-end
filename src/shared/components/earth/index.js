import earthImg from '$assets/earth.jpg';
import bumpImg from '$assets/bump.jpg';
import {
  CONTROL_MIN_DISTANCE,
  CONTROL_MAX_DISTANCE,
  CONTROL_MIN_POLAR_ANGLE,
  CONTROL_MAX_POLAR_ANGLE,
} from '$constants';

import * as THREE from 'three';
import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber/native';

import OrbitControlsView from '../orbit-control';

const radiusGlobe = 1.0;

const PointLight = () => {
  return <pointLight color="white" intensity={1} position={[10, 10, 10]} />;
};

const Globe = (props) => {
  const group = useRef();

  const [texture, bump] = useLoader(THREE.TextureLoader, [earthImg, bumpImg]);

  return (
    <group ref={group} {...props}>
      <mesh>
        <sphereBufferGeometry args={[radiusGlobe, 128, 128]} attach="geometry" />
        <meshStandardMaterial
          attach="material"
          bumpMap={bump}
          bumpScale={1}
          map={texture}
          transparent
        />
      </mesh>
    </group>
  );
};

const EarthGlobe = () => {
  const orbitcontrolRef = useRef(null);
  const [camera, setCamera] = useState(null);

  useEffect(() => {
    if (orbitcontrolRef.current) {
      const control = orbitcontrolRef.current.getControls();

      if (control) {
        // min Zoom
        control.minDistance = CONTROL_MIN_DISTANCE;
        // max Zoom
        control.maxDistance = CONTROL_MAX_DISTANCE;
        // smooth rotating
        control.enableDamping = true;
        // yAxis - 45deg
        control.minPolarAngle = CONTROL_MIN_POLAR_ANGLE;
        // yAxis + 45deg
        control.maxPolarAngle = CONTROL_MAX_POLAR_ANGLE;
      }
    }
  }, [camera]);

  return (
    <>
      <OrbitControlsView camera={camera} ref={orbitcontrolRef} style={{ flex: 1 }}>
        <Canvas onCreated={({ camera }) => setCamera(camera)}>
          <ambientLight color="lightblue" />
          <PointLight />
          <Suspense fallback={null}>
            <Globe position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1.5} />
          </Suspense>
        </Canvas>
      </OrbitControlsView>
    </>
  );
};

export default EarthGlobe;
