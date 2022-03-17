// eslint-disable-next-line import/no-unresolved
//import { API_TOKEN, API_URL } from '@env';

import axios from 'axios';
type activityParams = {
  title: string;
  lat: number;
  long: number;
  page: number;
};

class GetActivitys {
  get = async (params: activityParams) => {
    const API_TOKEN =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjI4NTY3MTBjMGY1ZDNiMDAyMDdhZDciLCJ3YWxsZXRBZGRyZXNzIjoiMHhmN2MzYTAyOEYxMmM2NTA1NkFlQUVFODEyODc0MTBjZDUzMDM4ZTlBIiwiaWF0IjoxNjQ3MDAzNTQyLCJleHAiOjE2NDgyOTk1NDJ9.us6QxqoLdz5g7nLPV3326PS_kUuQwTnoMmK4xvvqUm0';
    const API_URL = 'https://testapi.pozzleplanet.com';
    console.log(
      `${API_URL}/v1/activities?lat=` +
        params.lat +
        '&long=' +
        params.long +
        '&title=' +
        params.title +
        '&page=' +
        params.page
    );
    return axios.get(
      `${API_URL}/v1/activities?lat=` +
        params.lat +
        '&long=' +
        params.long +
        '&title=' +
        params.title +
        '&page=' +
        params.page,
      {
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );
  };
}

export default new GetActivitys();
