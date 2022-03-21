export const updateRecordingAndFile = (
  isRecordingInput?: boolean,
  fileInput?: any,
) => {
  console.log(
    'isRecording: isRecordingInput, file: fileInput }',
    isRecordingInput,
    fileInput,
  );
  return {
    payload: { isRecording: isRecordingInput, file: fileInput },
    type: 'UPDATE_DATA',
  };
};
