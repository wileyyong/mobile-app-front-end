import { Colors } from '$theme';
import { Button, CloseIcon, ReloadIcon } from '$components';

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import style from '../style';
import { IconButton } from '../../buttons';

type CameraCancelButtonType = {
  cancelRecording: any;
  setFile: any;
};

const PozzleCameraCancelButton = ({
  cancelRecording,
  setFile,
}: CameraCancelButtonType) => {
  const cancelRecordingInternal = async () => {
    setFile(undefined);
    cancelRecording();
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
      }}>
      <TouchableOpacity
        onPress={cancelRecordingInternal}
        style={style.reloadIcon}>
        <ReloadIcon color={Colors.DARK_PURPLE} size="medium" />
      </TouchableOpacity>
    </View>
  );
};

export default PozzleCameraCancelButton;
