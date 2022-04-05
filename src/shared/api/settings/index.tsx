// eslint-disable-next-line import/no-unresolved
import { API_TOKEN, API_URL } from '@env';

import axios from 'axios';
import { settingsList, settingsModel } from './models';

const Settings = {
  async get(): Promise<settingsModel[]> {
    return settingsList;
    return axios.get(`${API_URL}/activities?`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
  },
};

export default Settings;
