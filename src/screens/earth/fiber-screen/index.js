
import * as THREE from 'three';
import React, { Suspense, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';

import earthImg from '$assets/earth.jpg';

import bumpImg from '$assets/bump.jpg';



const radiusGlobe = 1.7



function Globe() {
  const group = useRef()
  
  useFrame(({ clock }) => {
    group.current.rotation.y = Math.cos(clock.getElapsedTime() / 10 ) * Math.PI;
  })
  
  const [texture, bump] = useLoader(THREE.TextureLoader, [earthImg, bumpImg])

  return (
    <group ref={group}>
      <mesh>
        <sphereBufferGeometry args={[radiusGlobe, 128, 128]} attach="geometry" />
        <meshStandardMaterial attach="material" bumpMap={bump} bumpScale={1} map={texture} transparent />
      </mesh>
    </group>
  )
}

const PointLight = () => {
  return <pointLight color='white' intensity={1} position={[10, 10, 10]} />
}


function EarthGlobeScreen() {
  return (
      <Canvas>
      <ambientLight color="lightblue" />
      <PointLight />
      <Suspense fallback={null}>
      <Globe />
      </Suspense>
    </Canvas>
  );
}

export default EarthGlobeScreen;
