export function updateRecordingAndFile(isRecording, file) {
  return {
    type: 'UPDATE_DATA',
    payload: { isRecording: isRecording, file: file },
  };
}
