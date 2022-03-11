import { API_TOKEN, API_URL } from '$constants';

import axios from 'axios';

type activityModel = {
  title: string;
  videoSrc: string;
  lat: number;
  long: number;
  createdBy: string;
  location: {
    type: string;
    coordinates: Array<number>;
  };
};

class CreateActivity {
  put = async (model: activityModel) => {
    return axios.put(`${API_URL}/v1/activities`, model, {
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
  };
}

export default new CreateActivity();
