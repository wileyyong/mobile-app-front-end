import { Colors } from '$theme';
import { CloseIcon } from '$components';

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const PozzleCameraCancelButton = ({ cancelRecording, setFile }) => {
  const closeIconColor = Colors.WHITE;

  const cancelRecordingInternal = async () => {
    setFile(null);
    cancelRecording();
  };

  return (
    <View>
      <TouchableOpacity onPress={cancelRecordingInternal}>
        <CloseIcon color={closeIconColor} size="medium" />
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
