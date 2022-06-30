// eslint-disable-next-line import/no-unresolved
import { API_TOKEN, API_URL } from '@env';

import axios from 'axios';
import { instance } from '../axios';
import { pozzleModel, pozzleParams } from './models';
const Pozzle = {
  async get() {
    return await axios.get(`${API_URL}/users/`, {
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
  },
  async getPozzles(route: string) {
    return await axios.get(
      `${API_URL}/users/pozzles?userId=${route ? route : ''}`,
      {
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      },
    );
  },
  async getUser(userId: string) {
    return await instance.get(`/users/${userId}`);
  },
  async updateUser(user: {
    bio:string,
    userName:string,
    pronounce:string,
    profilePhoto:string,
  }) {
    return await instance.patch(`/users/`,user);
  },
};

export default Pozzle;
