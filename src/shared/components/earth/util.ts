import * as THREE from 'three';

export function convertPointToSpherial(point: TCordinates) {
  let adjustP0 = (point[0] + 90) * - 1;
  if (adjustP0 < -180) {
    adjustP0 = 360 + adjustP0;
  }
  const theta = adjustP0 * Math.PI / 180;
  const phi = ((point[1]) * Math.PI) / 180; // y coord to phi
 
  return [theta, phi];
}
export function convertSpherialToPoint(spherial: TCordinates) {
  let x = (spherial[0] * 180) / Math.PI - 90; // theta to x coord

  // 270~360 range adjust
  x = x < -180 ? 360 + x : x;
  const y = ((spherial[1] * 180) / Math.PI - 90) * -1; // phi to y coord
  return [x, y];
}

/**
 *  conversion coordiate to spherical
 *  [0,0] is artic pole
 * @param lat 
 * @param lng 
 * @param radius 
 * @returns 
 */
 export const getVertex = (lat: number, lng: number, radius: number) => {
  const vector = new THREE.Vector3().setFromSpherical(
      new THREE.Spherical(
          radius,
          THREE.MathUtils.degToRad(90 - lng),
          THREE.MathUtils.degToRad(lat + 90),
      )
  );

  return vector;
};