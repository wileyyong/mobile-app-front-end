import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

/**
 * A view to provide space between components
 */
const Spacer = ({ height, width }) => {
  if (width) {
    return <View style={{ width }} />;
  }

  if (height) {
    return <View style={{ height }} />;
  }

  return <View style={{ flex: 1 }} />;
};

Spacer.defaultProps = {
  height: 0,
  width: 0,
};

Spacer.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Spacer;
