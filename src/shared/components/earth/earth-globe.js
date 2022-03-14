import earthImg from '$assets/earth.jpg';
import bumpImg from '$assets/bump.jpg';
import {
  CONTROL_MIN_ZOOM,
  CONTROL_MAX_ZOOM,
  CONTROL_MIN_POLAR_ANGLE,
  CONTROL_MAX_POLAR_ANGLE,
  MAPBOX_SWITCH_THRESHOLD,
} from '$constants';

import * as THREE from 'three';
import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber/native';
import PropTypes from 'prop-types';

import OrbitControlsView from '../orbit-control';

import { convertPointToSpherial, convertSpherialToPoint } from './util';

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

const EarthGlobe = ({ onExitMode, point, setPoint, setZoom, zoom }) => {
  const orbitcontrolRef = useRef(null);
  const [camera, setCamera] = useState(null);

  useEffect(() => {
    if (orbitcontrolRef.current) {
      const control = orbitcontrolRef.current.getControls();

      if (control) {
        // min Zoom
        control.minZoom = CONTROL_MIN_ZOOM;
        // max Zoom
        control.maxZoom = CONTROL_MAX_ZOOM;
        // smooth rotating
        // control.enableDamping = true;
        // yAxis - 45deg
        control.minPolarAngle = CONTROL_MIN_POLAR_ANGLE;
        // yAxis + 45deg
        control.maxPolarAngle = CONTROL_MAX_POLAR_ANGLE;

        const spherial = convertPointToSpherial(point);

        // set initial coordinates
        control.zoom0 = zoom;
        control.reset();
        control.rotateLeft(spherial[0]);
        control.rotateUp(spherial[1]);
        control.update();
      }
    }
  }, [camera, zoom]);

  const onGlobeChanged = () => {
    if (orbitcontrolRef.current) {
      const control = orbitcontrolRef.current.getControls();

      if (control.spherical) {
        const curPoint = convertSpherialToPoint([control.spherical.theta, control.spherical.phi]);

        setPoint(curPoint);

        if (control.object.zoom >= MAPBOX_SWITCH_THRESHOLD) {
          setZoom(MAPBOX_SWITCH_THRESHOLD);
          onExitMode();
        }
      }
    }
  };

  return (
    <>
      <OrbitControlsView
        camera={camera}
        ref={orbitcontrolRef}
        style={{ flex: 1 }}
        onTouchEnd={onGlobeChanged}
      >
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

EarthGlobe.defaultProps = {
  onExitMode: () => {},
  point: [0, 0],
  setPoint: () => {},
  setZoom: () => {},
  zoom: 1,
};

EarthGlobe.propTypes = {
  // Earth Globe callback on return
  onExitMode: PropTypes.func,
  // Earth Globe coordinate
  point: PropTypes.arrayOf(PropTypes.number),
  // Earth Globe setPoint callback
  setPoint: PropTypes.func,
  // Earth Globe setZoom callback
  setZoom: PropTypes.func,
  // Earth Globe zoom
  zoom: PropTypes.number,
};

export default EarthGlobe;
