export function convertPointToSpherial(point) {
  const theta = ((point[0] + 90) * -1 * Math.PI) / 180; // x coord to theta
  const phi = (point[1] * Math.PI) / 180; // y coord to phi

  return [theta, phi];
}

export function convertSpherialToPoint(spherial) {
  const x = (spherial[0] * 180) / Math.PI - 90; // theta to x coord
  const y = ((spherial[1] * 180) / Math.PI - 90) * -1; // phi to y coord

  return [x, y];
}
