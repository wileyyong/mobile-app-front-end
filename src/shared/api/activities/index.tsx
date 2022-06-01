import { instance } from '../axios';
import { activityParams, createActivityModel } from './models';

const Activities = {
  async get(params: activityParams) {
    let queryParams = 'page=' + params.page;
    if (params.lat) queryParams += '&lat=' + params.lat;
    if (params.long) queryParams += '&long=' + params.long;
    if (params.title) queryParams += '&title=' + params.title;

    return instance.get(`/activities?${queryParams}`);
  },
  async post(model: createActivityModel) {
    return instance.post(`/activities/${model.activityId}`, model, {
      transformResponse: d => {
        return d;
      },
    });
  },
  async put(model: createActivityModel) {
    return instance.put(`/activities`, model);
  },
  async remove(activityId: string) {
    return instance.delete(`/activities/${activityId}`);
  },
  async pledgeActivity(amount: number, activityId: string) {
    return instance.post(`/activities/${activityId}`, { amount, activityId });
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
