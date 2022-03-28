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

export const updateActivity = (
  activityInput?: any,
  hasActivityInput?: boolean,
) => {
  console.log(hasActivityInput);
  return {
    payload: {
      activity: activityInput,
      hasActivity: hasActivityInput,
    },
    type: 'UPDATE_ACTIVITY',
  };
};

export const updateUploadingStatus = (isUploadingInput?: boolean) => {
  return {
    payload: {
      isUploading: isUploadingInput,
    },
    type: 'UPDATE_UPLOADING',
  };
};

export const updateModalStatus = (hasModalOpenInput?: boolean) => {
  return {
    payload: {
      hasModalOpen: hasModalOpenInput,
    },
    type: 'UPDATE_MODAL',
  };
};

export const updateProgress = (uploadProgressInput?: number) => {
  return {
    payload: {
      uploadProgress: uploadProgressInput,
    },
    type: 'UPDATE_PROGRESS',
  };
};
