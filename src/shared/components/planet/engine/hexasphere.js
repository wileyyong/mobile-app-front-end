/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import Point from './point';
import Face from './face';
import Tile from './tile.js';

const Hexasphere = function Hexasphere(radius, numDivisions, hexSize) {
  // this.radius = radius;
  const tao = 1.61803399;
  const corners = [
    new Point(1000, tao * 1000, 0),
    new Point(-1000, tao * 1000, 0),
    new Point(1000, -tao * 1000, 0),
    new Point(-1000, -tao * 1000, 0),
    new Point(0, 1000, tao * 1000),
    new Point(0, -1000, tao * 1000),
    new Point(0, 1000, -tao * 1000),
    new Point(0, -1000, -tao * 1000),
    new Point(tao * 1000, 0, 1000),
    new Point(-tao * 1000, 0, 1000),
    new Point(tao * 1000, 0, -1000),
    new Point(-tao * 1000, 0, -1000),
  ];

  let points = {};

  for (let i = 0; i < corners.length; i += 1) {
    points[corners[i]] = corners[i];
  }

  let faces = [
    new Face(corners[0], corners[1], corners[4], false),
    new Face(corners[1], corners[9], corners[4], false),
    new Face(corners[4], corners[9], corners[5], false),
    new Face(corners[5], corners[9], corners[3], false),
    new Face(corners[2], corners[3], corners[7], false),
    new Face(corners[3], corners[2], corners[5], false),
    new Face(corners[7], corners[10], corners[2], false),
    new Face(corners[0], corners[8], corners[10], false),
    new Face(corners[0], corners[4], corners[8], false),
    new Face(corners[8], corners[2], corners[10], false),
    new Face(corners[8], corners[4], corners[5], false),
    new Face(corners[8], corners[5], corners[2], false),
    new Face(corners[1], corners[0], corners[6], false),
    new Face(corners[11], corners[1], corners[6], false),
    new Face(corners[3], corners[9], corners[11], false),
    new Face(corners[6], corners[10], corners[7], false),
    new Face(corners[3], corners[11], corners[7], false),
    new Face(corners[11], corners[6], corners[7], false),
    new Face(corners[6], corners[0], corners[10], false),
    new Face(corners[9], corners[1], corners[11], false),
  ];

  const getPointIfExists = point => {
    if (points[point]) {
      // console.log("EXISTING!");
      return points[point];
    }
    // console.log("NOT EXISTING!");
    points[point] = point;

    return point;
  };

  const newFaces = [];

  for (let f = 0; f < faces.length; f += 1) {
    // console.log("-0---");
    let prev = null;
    let bottom = [faces[f].points[0]];
    const left = faces[f].points[0].subdivide(
      faces[f].points[1],
      numDivisions,
      getPointIfExists,
    );
    const right = faces[f].points[0].subdivide(
      faces[f].points[2],
      numDivisions,
      getPointIfExists,
    );

    for (let i = 1; i <= numDivisions; i += 1) {
      prev = bottom;
      bottom = left[i].subdivide(right[i], i, getPointIfExists);

      for (let j = 0; j < i; j += 1) {
        let nf = new Face(prev[j], bottom[j], bottom[j + 1]);

        newFaces.push(nf);

        if (j > 0) {
          nf = new Face(prev[j - 1], prev[j], bottom[j]);
          newFaces.push(nf);
        }
      }
    }
  }

  faces = newFaces;

  const newPoints = {};

  for (const p in points) {
    const np = points[p].project(radius);

    newPoints[np] = np;
  }

  points = newPoints;

  this.tiles = [];
  this.tileLookup = {};

  // create tiles and store in a lookup for references
  for (const p in points) {
    const newTile = new Tile(points[p], hexSize);

    this.tiles.push(newTile);
    this.tileLookup[newTile.toString()] = newTile;
  }

  // resolve neighbor references now that all have been created
  for (const t in this.tiles) {
    this.tiles[t].neighbors = this.tiles[t].neighborIds.map(
      item => this.tileLookup[item],
    );
  }
};

export default Hexasphere;
