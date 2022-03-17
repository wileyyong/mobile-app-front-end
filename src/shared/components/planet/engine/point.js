/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-restricted-properties */
/* eslint-disable no-param-reassign */
const Point = function Point(x, y, z) {
  if (x !== undefined && y !== undefined && z !== undefined) {
    this.x = x.toFixed(3);
    this.y = y.toFixed(3);
    this.z = z.toFixed(3);
  }

  this.faces = [];
};

Point.prototype.subdivide = function subdivide(point, count, checkPoint) {
  const segments = [];

  segments.push(this);

  for (let i = 1; i < count; i += 1) {
    let np = new Point(
      this.x * (1 - i / count) + point.x * (i / count),
      this.y * (1 - i / count) + point.y * (i / count),
      this.z * (1 - i / count) + point.z * (i / count),
    );

    np = checkPoint(np);
    segments.push(np);
  }

  segments.push(point);

  return segments;
};

Point.prototype.segment = function segment(point, percent) {
  percent = Math.max(0.01, Math.min(1, percent));

  const x = point.x * (1 - percent) + this.x * percent;
  const y = point.y * (1 - percent) + this.y * percent;
  const z = point.z * (1 - percent) + this.z * percent;

  const newPoint = new Point(x, y, z);

  return newPoint;
};

Point.prototype.midpoint = function midpoint(point) {
  return this.segment(point, 0.5);
};

Point.prototype.project = function project(radius, percent) {
  if (percent === undefined) {
    percent = 1.0;
  }

  percent = Math.max(0, Math.min(1, percent));
  // const yx = this.y / this.x;
  // const zx = this.z / this.x;
  // const yz = this.z / this.y;

  const mag = Math.sqrt(
    Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2),
  );
  const ratio = radius / mag;

  this.x = this.x * ratio * percent;
  this.y = this.y * ratio * percent;
  this.z = this.z * ratio * percent;

  return this;
};

Point.prototype.registerFace = function registerFace(face) {
  this.faces.push(face);
};

Point.prototype.getOrderedFaces = function getOrderedFaces() {
  const workingArray = this.faces.slice();
  const ret = [];

  let i = 0;

  while (i < this.faces.length) {
    if (i === 0) {
      ret.push(workingArray[i]);
      workingArray.splice(i, 1);
    } else {
      let hit = false;
      let j = 0;

      while (j < workingArray.length && !hit) {
        if (workingArray[j].isAdjacentTo(ret[i - 1])) {
          hit = true;
          ret.push(workingArray[j]);
          workingArray.splice(j, 1);
        }
        j += 1;
      }
    }
    i += 1;
  }

  return ret;
};

Point.prototype.findCommonFace = function findCommonFace(other, notThisFace) {
  for (let i = 0; i < this.faces.length; i += 1) {
    for (let j = 0; j < other.faces.length; j += 1) {
      if (
        this.faces[i].id === other.faces[j].id &&
        this.faces[i].id !== notThisFace.id
      ) {
        return this.faces[i];
      }
    }
  }

  return null;
};

Point.prototype.toJson = function toJson() {
  return {
    x: this.x,
    y: this.y,
    z: this.z,
  };
};

Point.prototype.toString = function toString() {
  return `${this.x},${this.y},${this.z}`;
};

export default Point;
