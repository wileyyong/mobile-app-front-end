export const updateRecordingAndFile = (isRecording: number, file?: string) => {
  return {
    type: 'UPDATE_DATA',
    payload: { isRecording: isRecording, file: file },
  };
};
