export const showOptsSheet = (showOptsSheet: boolean) => {
  return {
    payload: {
      showOptsSheet: showOptsSheet,
    },
    type: 'UPDATE_OPTS_SHEET',
  };
};

export const showPassportModal = (showPassportModal: boolean, userId?: string) => {
  return {
    payload: {
      showPassportModal: showPassportModal,
      userId: userId
    },
    type: 'UPDATE_PASSPORT_MODAL',
  };
};
 