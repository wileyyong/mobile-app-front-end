export function updateCounterAndFile(count, file) {
  return {
    type: 'UPDATE_DATA',
    payload: { count: count, file: file },
  };
}
