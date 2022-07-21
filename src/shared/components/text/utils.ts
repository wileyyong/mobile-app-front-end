export type TSize =
  | 'xxs'
  | 'xs'
  | '1xs'
  | '2xs'
  | 'sm'
  | 'md'
  | '1md'
  | '2md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | undefined;

export const getFontSize = (size: TSize) => {
  switch (size) {
    case 'xxs':
      return 12;
    case 'xs':
      return 14;
    case '1xs':
      return 16;
    case '2xs':
      return 17;
    case 'sm':
      return 18;
    case 'md':
      return 20;
    case '1md':
      return 24;
    case '2md':
      return 26;
    case 'lg':
      return 28;
    case 'xl':
      return 30;
    case '2xl':
      return 36;
    case '3xl':
      return 40;
    case '4xl':
      return 44;

    default:
      return 20;
  }
};

export type TWeight =
  | 'regular'
  | 'bold'
  | 'semibold'
  | 'medium'
  | 'heavy'
  | 'light'
  | 'ultralight'
  | 'thin'
  | undefined;

export const getFontWeight = (weight: TWeight) => {
  switch (weight) {
    case 'regular':
      return '400';
    case 'bold':
      return '700';
    case 'semibold':
      return '600';
    case 'medium':
      return '500';
    case 'heavy':
      return '800';
    case 'light':
      return '200';
    case 'ultralight':
      return '100';
    case 'thin':
      return '300';
    default:
      return '400';
  }
};
