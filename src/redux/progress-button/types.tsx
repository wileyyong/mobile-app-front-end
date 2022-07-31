import { rewardItem } from "src/shared/api/rewards/models";

export type progressButtonType = {
  isRecording?: boolean;
  file?: any;
  hasActivity: boolean;
  activity?: any;
  isUploading?: boolean;
  hasModalOpen?: boolean;
  uploadProgress?: number;
  recordingStatus: boolean;
  showOptsSheet: boolean;
  rewards: rewardItem[]
};
