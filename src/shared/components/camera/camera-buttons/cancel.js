import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './../style';
import { Colors } from '$theme';
import { CloseIcon } from '$components';

const PozzleCameraCancelButton = forwardRef((props, ref) => {
  const [file, setVideoFileState] = useState(null);
  const closeIconColor = Colors.WHITE;

  const cancelRecording = async () => {
    setVideoFileState(null);
    props.cancelRecording();
  };

  useImperativeHandle(ref, () => ({
    cancelRecording() {
      cancelRecording();
    },
    setVideoFile(_file) {
      setVideoFileState(_file);
    },
  }));

  return (
    <>
      {file ? (
        <View style={styles.cameraCancelContainer}>
          <TouchableOpacity onPress={cancelRecording}>
            <CloseIcon color={closeIconColor} />
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
    </>
  );
});

PozzleCameraCancelButton.defaultProps = {
  cancelRecording: () => {},
};

PozzleCameraCancelButton.propTypes = {
  cancelRecording: PropTypes.func,
};

export default PozzleCameraCancelButton;
