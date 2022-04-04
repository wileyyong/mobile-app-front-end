// eslint-disable-next-line import/no-unresolved
import { API_TOKEN, API_URL } from '@env';

import axios from 'axios';
import { pozzleModel, pozzleParams } from './models';
const Pozzle = {
    async get(params: pozzleParams) {
        
        return axios.get(
          `${API_URL}/v1/pozzles?lat=${params.lat}&long=${params.long}&zoom=${params.zoom}`,
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
        return axios.put(`${API_URL}/v1/pozzles`, model, {
          headers: {
            Accept: '*/*',
            Authorization: `Bearer ${API_TOKEN}`,
            'Content-Type': 'application/json',
          },
        });
      },
};

export default Pozzle;