import { instance } from '../axios';
import { activityParams, createActivityModel } from './models';

const Activities = {
  async get(params: activityParams) {
    let queryParams = 'page=' + params.page;
    if (params.lat) queryParams += '&lat=' + params.lat;
    if (params.long) queryParams += '&long=' + params.long;
    if (params.title) queryParams += '&title=' + params.title;

    return instance.get(`/activities?${queryParams}`, {
      headers: { Accept: 'application/json' },
    });
  },
  async post(model: createActivityModel) {
    return instance.post(`/activities/${model.activityId}`, model, {
      transformResponse: d => {
        console.log('d', d);
        return d;
      },
    });
  },
  async put(model: createActivityModel) {
    return instance.put(`/activities`, model);
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
