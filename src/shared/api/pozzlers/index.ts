// eslint-disable-next-line import/no-unresolved
import { API_TOKEN, API_URL } from '@env';

import axios from 'axios';
import { pozzleModel, pozzleParams } from './models';
const Pozzle = {
    async get() {
        
        return axios.get(
          `${API_URL}/users`,
          {
            headers: {
              Accept: '*/*',
              Authorization: `Bearer ${API_TOKEN}`,
              'Content-Type': 'application/json',
            },
          },
        );
      },
    
};

export default Pozzle;