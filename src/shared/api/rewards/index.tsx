import { instance } from '../axios';
import { rewardsModel } from './models';

const Rewards = {
  async createReward(obj:rewardsModel): Promise<{data:rewardsModel}> {
    return instance.post(`/rewards`,obj);
  },
};

export default Rewards;
