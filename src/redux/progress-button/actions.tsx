export const updateRecordingAndFile = (
  isRecordingInput?: boolean,
  fileInput?: any,
  hasActivityInput?: boolean,
) => {
  console.log(
    'isRecording: isRecordingInput, file: fileInput }',
    isRecordingInput,
    fileInput,
    hasActivityInput,
  );
  return {
    payload: {
      isRecording: isRecordingInput,
      file: fileInput,
      hasActivity: hasActivityInput,
    },
    type: 'UPDATE_DATA',
  };
};

export const updateActivity = (hasActivityInput?: boolean) => {
  console.log(hasActivityInput);
  return {
    payload: {
      hasActivity: hasActivityInput,
    },
    type: 'UPDATE_ACTIVITY',
  };
};
