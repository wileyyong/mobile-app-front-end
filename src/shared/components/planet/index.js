import { useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber/native';
import { Mesh, Geometry, Vector3, Face3, Group } from 'three';

import { Hexasphere, meshMaterials } from './engine';

const DIVISIONS = 7;
const RADIUS = 30;
const SCALE = 40;
const SPEED = 0.01;
const TILE_SIZE = 0.98;
const hexasphere = new Hexasphere(RADIUS, DIVISIONS, TILE_SIZE);

function Planet({ position = [0, 0, 0], size = 1, speed = 1 }) {
  const [planet, setPlanet] = useState();
  const { scene } = useThree();

  useFrame(() => {
    if (planet) planet.rotation.y += speed * SPEED;
  });

  const vector = (bp) =>
    new Vector3((bp.x * size) / SCALE, (bp.y * size) / SCALE, (bp.z * size) / SCALE);

  useEffect(() => {
    const planes = new Group();
    const { length } = meshMaterials;

    for (let i = 0; i < hexasphere.tiles.length; i += 1) {
      const t = hexasphere.tiles[i];
      const geometry = new Geometry();

      for (let j = 0; j < t.boundary.length; j += 1) {
        const bp = t.boundary[j];

        geometry.vertices.push(vector(bp));
      }
      geometry.faces.push(new Face3(0, 1, 2));
      geometry.faces.push(new Face3(0, 2, 3));
      geometry.faces.push(new Face3(0, 3, 4));

      if (geometry.vertices.length > 5) {
        geometry.faces.push(new Face3(0, 4, 5));
      }

      const mesh = new Mesh(geometry, meshMaterials[i % length]);

      planes.add(mesh);
    }

    planes.position.set(...position);
    scene.add(planes);
    setPlanet(planes);
  }, []);
}

export default Planet;
