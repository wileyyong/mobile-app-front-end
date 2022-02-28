import { Colors } from '$theme';
import { CloseIcon } from '$components';

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

type CameraCancelButtonType = {
  cancelRecording: any;
  setFile: any;
};

const PozzleCameraCancelButton = ({ cancelRecording, setFile }: CameraCancelButtonType) => {
  const closeIconColor = Colors.WHITE;

  const cancelRecordingInternal = async () => {
    setFile(null);
    cancelRecording();
  };

  return (
    <View>
      <TouchableOpacity onPress={cancelRecordingInternal}>
        <CloseIcon color={closeIconColor} size="medium" style={undefined} />
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
