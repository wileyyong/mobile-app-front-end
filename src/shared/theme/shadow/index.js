import { PropTypes } from 'prop-types';

import * as Colors from '../colors';

export const SMALL = Object.freeze({
  elevation: 1,
  shadowColor: Colors.BLACK,
  shadowOffset: {
    height: 1,
    width: 0,
  },
  shadowOpacity: 0.1,
  shadowRadius: 2,
});

export const MEDIUM = Object.freeze({
  elevation: 2,
  shadowColor: Colors.BLACK,
  shadowOffset: {
    height: 1,
    width: 0,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4,
});

export const LARGE = Object.freeze({
  elevation: 3,
  shadowColor: Colors.BLACK,
  shadowOffset: {
    height: 1,
    width: 0,
  },
  shadowOpacity: 0.5,
  shadowRadius: 6,
});

export const PropShape = PropTypes.shape({
  shadowColor: PropTypes.string.isRequired,
  shadowOffset: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
  shadowOpacity: PropTypes.number.isRequired,
  shadowRadius: PropTypes.number.isRequired,
});
