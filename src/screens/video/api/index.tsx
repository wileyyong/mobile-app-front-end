// eslint-disable-next-line import/no-unresolved
import { API_TOKEN, API_URL } from '@env';

import axios from 'axios';
type activityParams = {
  title: string;
  lat: number;
  long: number;
  page: number;
};

class GetActivitys {
  get = async (params: activityParams) => {
    console.log(
      `${API_URL}/v1/activities?lat=` +
        params.lat +
        '&long=' +
        params.long +
        '&title=' +
        params.title +
        '&page=' +
        params.page,
    );
    return axios.get(
      `${API_URL}/v1/activities?lat=` +
        params.lat +
        '&long=' +
        params.long +
        '&title=' +
        params.title +
        '&page=' +
        params.page,
      {
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      },
    );
  };
}

export default new GetActivitys();
