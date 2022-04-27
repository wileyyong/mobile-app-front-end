import {
  CONTROL_MIN_ZOOM,
  CONTROL_MAX_ZOOM,
  CONTROL_MIN_POLAR_ANGLE,
  CONTROL_MAX_POLAR_ANGLE,
  MAPBOX_SWITCH_THRESHOLD,
} from '$constants';
import {
  GlobeMarkers,
  OrbitControlsView,
} from '$components';

import * as THREE from 'three';
import {Camera} from 'three';
import React, { Suspense, useRef, useEffect, useState } from 'react';
import {Canvas, useLoader } from '@react-three/fiber/native';

import { convertPointToSpherial, convertSpherialToPoint } from './util';
import { Pozzles } from '$api';
import { pozzleModel } from 'src/shared/api/pozzles/models';

const radiusGlobe = 1.0;
const earthImg = require('src/assets/images/earth.jpg');
const bumpImg = require('src/assets/images/bump.jpg');

const PointLight = () => {
  return <pointLight color="white" intensity={1} position={[10, 10, 10]} />;
};

const Globe = props => {
  const group = useRef();

  const [texture, bump] = useLoader(THREE.TextureLoader, [earthImg, bumpImg]);

  return (
    <group ref={group} {...props}>
      <mesh>
        <sphereBufferGeometry
          args={[radiusGlobe, 128, 128]}
          attach="geometry"
        />
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

interface IEarthGlobe {
  onExitMode: () => void;
  point: TCordinates;
  setPoint: (points: [number, number]) => void;
  setZoom: (zoom: number) => void;
  zoom: number;
}

const EarthGlobe = ({
  onExitMode,
  point = [0, 0],
  setPoint,
  setZoom,
  zoom,
}: IEarthGlobe) => {
  const orbitcontrolRef = useRef(null);
  const [camera, setCamera] = useState<Camera | null>(null);
  const [pozzles, setPozzles] = useState<pozzleModel[]>([]);
  

  const filterPozzle = (tPozzles:pozzleModel[]) =>{
    if(pozzles.length == 0) {
      setPozzles(tPozzles);
    } else {
      tPozzles.forEach(ele => {
        if (!pozzles.find(pozzle => pozzle._id === ele._id)) {
          pozzles.push(ele);
        }
      })
      setPozzles(pozzles);
    }
  };

  const onGlobeChanged = () => {
    if (orbitcontrolRef.current) {
      const control = orbitcontrolRef.current.getControls();
      if(control) {
        if (control.spherical) {
          const curPoint = convertSpherialToPoint([
            control.spherical.theta,
            control.spherical.phi,
          ]);
  
          setPoint(curPoint);
  
          if (control.object.zoom >= MAPBOX_SWITCH_THRESHOLD) {
            setZoom(MAPBOX_SWITCH_THRESHOLD);
            onExitMode();
          }else {
            setZoom(control.object.zoom);
          }
        }
      }
    }
  };

  useEffect(() => {
    if (orbitcontrolRef.current) {
      const control = orbitcontrolRef.current.getControls();

      if (control) {
        // min Zoom
        control.minZoom = CONTROL_MIN_ZOOM;
        // max Zoom
        control.maxZoom = CONTROL_MAX_ZOOM;
        // smooth rotating
        control.enableDamping = true;
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
        control.saveState();
      }
    }
  }, [camera]);

  useEffect(()=>{
  }, pozzles);

  useEffect(()=>{
  Pozzles.get({long: point[0], lat: point[1], zoom:zoom})
    .then(response => {
      filterPozzle(response.data || []);
    });
  }, [zoom, point]);

  return (
    <>
      <OrbitControlsView
        camera={camera}
        ref={orbitcontrolRef}
        style={{ flex: 1 }}
        onTouchEnd={onGlobeChanged}>
        <Canvas onCreated={({ camera }) => setCamera(camera)}>
          <ambientLight color="lightblue" />
          <PointLight />
          <Suspense fallback={null}>
            <Globe position={[0,0,0]} rotation={[0, 0, 0]} scale={1.5} />
            <GlobeMarkers markers={pozzles} zoom={zoom}/>
          </Suspense>
        </Canvas>
      </OrbitControlsView>
    </>
  );
};

export default EarthGlobe;
