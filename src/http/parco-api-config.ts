import { AxiosRequestConfig } from 'axios';

const API_PARCO_BASE_URL = 'https://world.openfoodfacts.org/api/v0/';

const getApiUrl = (type: string) => {
  switch (type) {
    case 'parco':
      return API_PARCO_BASE_URL;
    default:
      break;
  }
};


export const ParcoApiConfigAttachment = (type: string): AxiosRequestConfig => {
  return {
    baseURL: getApiUrl(type),
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
    }
  };
};

