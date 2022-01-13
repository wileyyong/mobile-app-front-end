export const getWidth = (size) => {
  // each size is adjusted for the 1% horizontal margin
  switch (size) {
    case 'small':
      return '24%';
    case 'medium':
      return '49%';
    case 'large':
      return '74%';
    case 'full':
    default:
      return '99%';
  }
};
