// eslint-disable-next-line import/no-unresolved
import { API_TOKEN, API_URL } from '@env';

import axios from 'axios';
import { activityParams, createActivityModel } from './models';

const Activities = {
  async get(params: activityParams) {
    let queryParams = 'page=' + params.page;
    if (params.lat) queryParams += '&lat=' + params.lat;
    if (params.long) queryParams += '&long=' + params.long;
    if (params.title) queryParams += '&title=' + params.title;

    return axios.get(`${API_URL}/activities?` + queryParams, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
  },
  async post(model: createActivityModel) {
    return axios.post(`${API_URL}/activities/${model.activityId}`, model, {
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      transformResponse: d => {
        console.log('d', d);
        return d;
      },
    });
  },
  async put(model: createActivityModel) {
    return axios.put(`${API_URL}/activities`, model, {
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
  },
  async pledgeActivity(amount: number, activityId: string) {
    return axios.post(
      `${API_URL}/activities/${activityId}`,
      { amount, activityId },
      {
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      },
    );
  },
  createActivity(model: createActivityModel) {
    if (model.activityId) {
      return this.post(model); // Join Activity
    } else {
      return this.put(model); // Create Activity
    }
  },
};

export default Activities;
