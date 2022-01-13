export const getWidth = (size) => {
  switch (size) {
    case 'small':
      return 80;
    case 'medium':
      return 150;
    case 'large':
      return 250;
    case 'full':
      return '100%';
    default:
      return '100%';
  }
};
