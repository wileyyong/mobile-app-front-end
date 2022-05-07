// eslint-disable-next-line import/no-unresolved
import { API_TOKEN, API_URL } from '@env';

import axios from 'axios';
import { pozzleModel, pozzleParams } from './models';
const Pozzle = {
    async get(route:string) {
        
        return await axios.get(
          `${API_URL}/users/${route?route:""}`,
          {
            headers: {
              Accept: '*/*',
              Authorization: `Bearer ${API_TOKEN}`,
              'Content-Type': 'application/json',
            },
          },
        );
      },
      async getPozzles(route:string) {
        
        return await axios.get(
          `${API_URL}/users/pozzles?userId=${route?route:""}`,
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