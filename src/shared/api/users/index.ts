// eslint-disable-next-line import/no-unresolved
import { instance } from '../axios';

const Users = {
  async get() {
    return await instance.get(`/users/`);
  },
  async getPozzles(userId: string) {
    return await instance.get(`/users/pozzles?userId=${userId ? userId : ''}`);
  },
  async getUser(userId: string) {
    return await instance.get(`/users/${userId}`);
  },
  async getUserWithWalletId(walletAddress: string) {
    return await instance.get(`/users?walletAddress=${walletAddress}`);
  },
  async getPozzlesWithWalletId(walletAddress: string) {
    return await instance.get(`/users/pozzles?walletAddress=${walletAddress ? walletAddress : ''}`);
  },
};

export default Users;
