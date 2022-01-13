import { PropTypes } from 'prop-types';

const X = 4;

export const PropShape = PropTypes.shape({
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number,
});

// Padding Factories
function bottom(mult) {
  return Object.freeze({
    paddingBottom: X * mult,
  });
}

function left(mult) {
  return Object.freeze({
    paddingLeft: X * mult,
  });
}

function right(mult) {
  return Object.freeze({
    paddingRight: X * mult,
  });
}

function top(mult) {
  return Object.freeze({
    paddingTop: X * mult,
  });
}

function horizontal(mult) {
  return Object.freeze({
    ...left(mult),
    ...right(mult),
  });
}

function vertical(mult) {
  return Object.freeze({
    ...top(mult),
    ...bottom(mult),
  });
}

function allSides(mult) {
  return Object.freeze({
    ...left(mult),
    ...right(mult),
    ...top(mult),
    ...bottom(mult),
  });
}

// Exported Padding Objects
export const ALL_SIDES_1X = allSides(1);
export const ALL_SIDES_2X = allSides(2);
export const ALL_SIDES_3X = allSides(3);
export const ALL_SIDES_4X = allSides(4);
export const ALL_SIDES_5X = allSides(5);
export const ALL_SIDES_6X = allSides(6);
export const ALL_SIDES_7X = allSides(7);
export const ALL_SIDES_8X = allSides(8);
export const ALL_SIDES_9X = allSides(9);
export const ALL_SIDES_10X = allSides(10);

export const BOTTOM_1X = bottom(1);
export const BOTTOM_2X = bottom(2);
export const BOTTOM_3X = bottom(3);
export const BOTTOM_4X = bottom(4);
export const BOTTOM_5X = bottom(5);
export const BOTTOM_6X = bottom(6);
export const BOTTOM_7X = bottom(7);
export const BOTTOM_8X = bottom(8);
export const BOTTOM_9X = bottom(9);
export const BOTTOM_10X = bottom(10);

export const HORIZONTAL_1X = horizontal(1);
export const HORIZONTAL_2X = horizontal(2);
export const HORIZONTAL_3X = horizontal(3);
export const HORIZONTAL_4X = horizontal(4);
export const HORIZONTAL_5X = horizontal(5);
export const HORIZONTAL_6X = horizontal(6);
export const HORIZONTAL_7X = horizontal(7);
export const HORIZONTAL_8X = horizontal(8);
export const HORIZONTAL_9X = horizontal(9);
export const HORIZONTAL_10X = horizontal(10);

export const LEFT_1X = left(1);
export const LEFT_2X = left(2);
export const LEFT_3X = left(3);
export const LEFT_4X = left(4);
export const LEFT_5X = left(5);
export const LEFT_6X = left(6);
export const LEFT_7X = left(7);
export const LEFT_8X = left(8);
export const LEFT_9X = left(9);
export const LEFT_10X = left(10);

export const NONE = Object.freeze({
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 0,
});

export const RIGHT_1X = right(1);
export const RIGHT_2X = right(2);
export const RIGHT_3X = right(3);
export const RIGHT_4X = right(4);
export const RIGHT_5X = right(5);
export const RIGHT_6X = right(6);
export const RIGHT_7X = right(7);
export const RIGHT_8X = right(8);
export const RIGHT_9X = right(9);
export const RIGHT_10X = right(10);

export const TOP_1X = top(1);
export const TOP_2X = top(2);
export const TOP_3X = top(3);
export const TOP_4X = top(4);
export const TOP_5X = top(5);
export const TOP_6X = top(6);
export const TOP_7X = top(7);
export const TOP_8X = top(8);
export const TOP_9X = top(9);
export const TOP_10X = top(10);

export const VERTICAL_1X = vertical(1);
export const VERTICAL_2X = vertical(2);
export const VERTICAL_3X = vertical(3);
export const VERTICAL_4X = vertical(4);
export const VERTICAL_5X = vertical(5);
export const VERTICAL_6X = vertical(6);
export const VERTICAL_7X = vertical(7);
export const VERTICAL_8X = vertical(8);
export const VERTICAL_9X = vertical(9);
export const VERTICAL_10X = vertical(10);
