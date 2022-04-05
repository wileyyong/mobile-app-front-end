import { t } from 'i18next';

export type settingsModel = {
  key: string;
  title: string;
  pozzles: number;
  isTotal?: boolean;
};

export const settingsList: settingsModel[] = [
  { key: '1', title: t('settings.pozzleVideo'), pozzles: 1 },
  {
    key: '2',
    title: t('settings.firstTimeJoinActivity'),
    pozzles: 1,
  },
  {
    key: '3',
    title: t('settings.inspiredBy'),
    pozzles: 1,
  },
  {
    key: '4',
    title: t('settings.firstVideoAdded'),
    pozzles: 1,
  },
];
