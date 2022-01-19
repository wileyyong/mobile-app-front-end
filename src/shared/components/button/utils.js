export const getWidth = (size) => {
  switch (size) {
    case 'small':
      return 80;
    case 'small-plus':
      return 140;
    case 'medium':
      return 150;
    case 'medium-plus':
      return 190;
    case 'large':
      return 250;
    case 'full':
      return '100%';
    default:
      return '100%';
  }
};
