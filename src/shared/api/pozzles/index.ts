// eslint-disable-next-line import/no-unresolved
import { instance } from '../axios';
import { pozzleModel, pozzleParams } from './models';
const Pozzle = {
  async get(params: pozzleParams) {
    return instance.get(
      `/pozzles?lat=${params.lat}&long=${params.long}&zoom=${params.zoom}`,
    );
  },
  async put(model: pozzleModel) {
    return instance.put(`/pozzles`, model);
  },
  async remove(activityId: string) {
    return instance.delete(`/pozzles/${activityId}`);
  },
  reportPozzle(activityId: string) {
    return instance.delete(`/pozzles/${activityId}`);
  },
  deletePozzle(activityId: string) {
    return this.remove(activityId);
  },
};

export default Pozzle;
