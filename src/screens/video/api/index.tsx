// eslint-disable-next-line import/no-unresolved
//import { API_TOKEN, API_URL } from '@env';

import axios from 'axios';

class GetActivitys {
  get = async () => {
    const API_TOKEN =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjI4NTY3MTBjMGY1ZDNiMDAyMDdhZDciLCJ3YWxsZXRBZGRyZXNzIjoiMHhmN2MzYTAyOEYxMmM2NTA1NkFlQUVFODEyODc0MTBjZDUzMDM4ZTlBIiwiaWF0IjoxNjQ3MDAzNTQyLCJleHAiOjE2NDgyOTk1NDJ9.us6QxqoLdz5g7nLPV3326PS_kUuQwTnoMmK4xvvqUm0';
    const API_URL = 'https://testapi.pozzleplanet.com';
    return axios.get(`${API_URL}/v1/activities`, {
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
  };
}

export default new GetActivitys();
