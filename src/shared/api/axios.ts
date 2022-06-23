import axios from 'axios';
import { API_URL } from '@env';
import { fetchItemFromStorage } from '$utils';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 20000,
  headers: { Accept: '*/*', 'Content-Type': 'application/json' },
});

instance.interceptors.request.use(async config => {
  const token = await fetchItemFromStorage('sessionToken');
  if (token) {
    config.headers.authorization ='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjI4NTY3MTBjMGY1ZDNiMDAyMDdhZDciLCJ3YWxsZXRBZGRyZXNzIjoiMHhmN2MzYTAyOEYxMmM2NTA1NkFlQUVFODEyODc0MTBjZDUzMDM4ZTlBIiwiaWF0IjoxNjU1OTYzMzYwLCJleHAiOjE2NTg1NTUzNjB9.yYjQWckww9H9p3HDndMtwDuMaKmfzAz4yLGM3frcrQI'; //token;
  }
  return config;
});

export { instance };
