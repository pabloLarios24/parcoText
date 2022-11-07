import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }
}
