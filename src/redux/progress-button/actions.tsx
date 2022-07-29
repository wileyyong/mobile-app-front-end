import { rewardItem } from "src/shared/api/rewards/models";

export const updateRecordingAndFile = (
  isRecordingInput?: boolean,
  fileInput?: any,
) => {
  return {
    payload: {
      isRecording: isRecordingInput,
      file: fileInput,
    },
    type: 'UPDATE_DATA',
  };
};

export const updateActivity = (
  activityInput?: any,
  hasActivityInput?: boolean,
) => {
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

export const updateRecordingStatus = (recordingStatusInput: boolean) => {
  return {
    payload: {
      recordingStatus: recordingStatusInput,
    },
    type: 'UPDATE_RECORDING_STATUS',
  };
};

export const showOptsSheet = (showOptsSheet: boolean) => {
  return {
    payload: {
      showOptsSheet: showOptsSheet,
    },
    type: 'UPDATE_OPTS_SHEET',
  };
};

export const updateRewards = (rewards: rewardItem[]) => {
  return {
    payload: {
      rewards: rewards,
    },
    type: 'UPDATE_REWARDS',
  };
};


