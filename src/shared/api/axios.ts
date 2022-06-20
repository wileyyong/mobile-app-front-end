import axios from 'axios';
import { API_URL } from '@env';
import { fetchItemFromStorage,setItemToStorage } from '$utils';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 20000,
  headers: { Accept: '*/*', 'Content-Type': 'application/json' },
});

instance.interceptors.request.use(async config => {
  const token = await fetchItemFromStorage('sessionToken');
  console.log(token);
  if (token) {
    config.headers.authorization = token;
  }
  return config;
});

export { instance };
