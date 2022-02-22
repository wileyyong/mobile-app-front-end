export const getWidth = (size) => {
  switch (size) {
    case 'small':
      return '29%';
    case 'medium':
      return '44%';
    case 'large':
      return '69%';
    case 'full':
    default:
      return '99%';
  }
};

export const getHeight = (size) => {
  switch (size) {
    case 'small':
      return 20;
    case 'medium':
      return 40;
    case 'large':
    case 'full':
    default:
      return 80;
  }
};
