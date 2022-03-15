export const updateRecordingAndFile = (isRecordingInput: number, fileInput?: string) => {
  return {
    payload: { file: fileInput, isRecording: isRecordingInput },
    type: 'UPDATE_DATA',
  };
};
