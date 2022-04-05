import { Colors } from '$theme';
import { CloseIcon } from '$components';

import React from 'react';
import { View, TouchableOpacity } from 'react-native';

type CameraCancelButtonType = {
  cancelRecording: any;
  setFile: any;
};

const PozzleCameraCancelButton = ({
  cancelRecording,
  setFile,
}: CameraCancelButtonType) => {
  const closeIconColor = Colors.WHITE;

  const cancelRecordingInternal = async () => {
    setFile(undefined);
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

export default PozzleCameraCancelButton;
