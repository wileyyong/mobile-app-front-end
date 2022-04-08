import { instance } from '../axios';
import { settingsList, settingsModel } from './models';

const Settings = {
  async get(): Promise<settingsModel[]> {
    return settingsList;
    return instance.get(`/activities?`);
  },
};

export default Settings;
