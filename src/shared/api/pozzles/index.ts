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
};

export default Pozzle;
