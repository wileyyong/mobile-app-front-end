export const showOptsSheet = (showOptsSheet: boolean) => {
  return {
    payload: {
      showOptsSheet: showOptsSheet,
    },
    type: 'UPDATE_OPTS_SHEET',
  };
};
