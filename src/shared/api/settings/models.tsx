export type settingsModel = {
  key: string;
  title: string;
  pozzles: number;
  isTotal?: boolean;
};

export const settingsList: settingsModel[] = [
  { key: '1', title: 'Pozzle Video', pozzles: 1 },
  {
    key: '2',
    title: 'First Time Joining Activity',
    pozzles: 1,
  },
  {
    key: '3',
    title: 'Inpired By',
    pozzles: 1,
  },
  {
    key: '4',
    title: 'First Video Added',
    pozzles: 1,
  },
];
