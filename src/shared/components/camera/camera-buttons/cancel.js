import { Colors } from '$theme';
import { CloseIcon } from '$components';

import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../style';

const PozzleCameraCancelButton = ({ cancelRecording, setFile }) => {
  const closeIconColor = Colors.WHITE;

  const _cancelRecording = async () => {
    setFile(null);
    cancelRecording();
  };

  return (
    <View>
      <TouchableOpacity onPress={_cancelRecording}>
        <CloseIcon color={closeIconColor} />
      </TouchableOpacity>
    </View>
  );
};

PozzleCameraCancelButton.defaultProps = {
  cancelRecording: () => {},
  setFile: () => {},
};

PozzleCameraCancelButton.propTypes = {
  cancelRecording: PropTypes.func,
  setFile: PropTypes.func,
};

export default PozzleCameraCancelButton;
