export const getWidth = (size: string, multiline: boolean) => {
  if (multiline) return '99%';

  // each size is adjusted for the 1% horizontal margin
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

export const getHeight = (size: string, multiline: boolean) => {
  if (!multiline) return null;

  switch (size) {
    case 'xs':
      return 48;
    case 'small':
      return 75;
    case 'medium':
      return 150;
    case 'large':
    case 'full':
    default:
      return 200;
  }
};
