// eslint-disable-next-line import/no-unresolved
import { API_TOKEN, API_URL } from '@env';

import axios from 'axios';
import { activityModel, activityParams } from './models';

const Activities = {
  async get(params: activityParams) {
    console.log(
      `${API_URL}/activities?lat=` +
        params.lat +
        '&long=' +
        params.long +
        '&title=' +
        params.title +
        '&page=' +
        params.page,
    );
    return axios.get(
      `${API_URL}/activities?lat=` +
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
      },
    );
  },
  async put(model: activityModel) {
    return axios.put(`${API_URL}/activities`, model, {
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
  },
};

export default Activities;
