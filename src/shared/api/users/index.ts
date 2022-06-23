// eslint-disable-next-line import/no-unresolved
import { instance } from '../axios';

const Users = {
  async get() {
    return await instance.get(`/users/`);
  },
  async getPozzles(userId: string) {
    console.log(`/users/pozzles?userId=${userId ? userId : ''}`)
    return await instance.get(`/users/pozzles?userId=${userId ? userId : ''}`);
  },
  async getUser(userId: string) {
    return await instance.get(`/users/${userId}`);
  },
};

export default Users;
