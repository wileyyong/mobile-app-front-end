// eslint-disable-next-line import/no-unresolved
import { API_TOKEN, API_URL } from '@env';

import axios from 'axios';
import { pozzleModel, pozzleParams } from './models';
const Pozzle = {
  async get(params: pozzleParams) {
    return axios.get(
      `${API_URL}/pozzles?lat=${params.lat}&long=${params.long}&zoom=${params.zoom}`,
      {
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      },
    );
  },
  async put(model: pozzleModel) {
    return axios.put(`${API_URL}/pozzles`, model, {
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
  },
  async remove(activityId: string) {
    return axios.delete(`${API_URL}/pozzles/${activityId}`, {
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
  },
  reportPozzle(activityId: string) {},
  deletePozzle(activityId: string) {
    return this.remove(activityId);
  },
};

export default Pozzle;
