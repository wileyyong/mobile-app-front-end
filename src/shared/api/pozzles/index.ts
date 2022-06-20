// eslint-disable-next-line import/no-unresolved
import { instance } from '../axios';
import { pozzleModel, pozzleParams } from './models';
const Pozzle = {
  async getByActivityId(activityId: number) {
    return instance.get(`/pozzles/${activityId}`);
  },
  async get(params: pozzleParams) {
    return instance.get(
      `/pozzles?lat=${params.lat}&long=${params.long}&zoom=${params.zoom}`,
    );
  },
  async put(model: pozzleModel) {
    return instance.put(`/pozzles`, model);
  },
  async remove(pozzleId: string) {
    return instance.delete(`/pozzles/${pozzleId}`); //to do AMIT
  },
  reportPozzle(pozzleId: string) {
    return instance.delete(`/pozzles/${pozzleId}`); //to do AMIT
  },
  deletePozzle(pozzleId: string) {
    return this.remove(pozzleId);
  },
};

export default Pozzle;
