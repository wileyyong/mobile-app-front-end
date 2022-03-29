// eslint-disable-next-line import/no-unresolved
import { API_TOKEN, API_URL } from '@env';

import axios from 'axios';
import { activityModel, activityParams } from './models';

const Activities = {
  async get(params: activityParams) {
    let queryParams = 'page=' + params.page;
    if (params.lat) queryParams += '&lat=' + params.lat;
    if (params.long) queryParams += '&long=' + params.long;
    if (params.title) queryParams += '&title=' + params.title;

    console.log('API', `${API_URL}/activities?` + queryParams);

    return axios.get(`${API_URL}/activities?` + queryParams, {
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
  },
  async post(model: activityModel) {
    console.log('URL', `${API_URL}/activities/${model.activityId}`);
    return axios.post(`${API_URL}/activities/${model.activityId}`, model, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      transformResponse: d => {
        console.log('error', d);
        return d;
      },
    });
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
  createActivity(model: activityModel) {
    if (model.activityId) {
      console.log('Join Activity', model);
      return this.post(model); // Join Activity
    } else {
      console.log('Create Activity', model);
      return this.put(model); // Create Activity
    }
  },
};

export default Activities;
