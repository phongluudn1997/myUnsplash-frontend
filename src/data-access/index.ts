import axios, { Method, AxiosRequestConfig, AxiosInstance } from "axios";
import { API_URL } from "config";

class DataAccess {
  _profile: string;
  _manner: AxiosInstance;
  constructor(profile: string, baseURL: string) {
    this._profile = profile;
    this._manner = axios.create({
      baseURL,
      timeout: 10000,
    });
  }
  _request(method: Method, args: AxiosRequestConfig) {
    return this._manner({
      method,
      ...args,
    });
  }
  Get(url: string, args?: AxiosRequestConfig) {
    return this._request("get", { url, ...args });
  }

  Post(url: string, args?: AxiosRequestConfig) {
    return this._request("post", { url, ...args });
  }
}

export const DataProfile = new DataAccess("data", API_URL);
