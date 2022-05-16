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
  async remove(pozzleId: number) {
    return axios.delete(`${API_URL}/pozzles/${pozzleId}`, {
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
  },
  reportPozzle() {},
  pledgePozzle() {},
  deletePozzle(pozzleId: number) {
    return this.remove(pozzleId);
  },
};

export default Pozzle;
