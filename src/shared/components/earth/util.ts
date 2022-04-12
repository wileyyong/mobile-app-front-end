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
