import axios from 'axios';
import { API_URL } from '../settings.js';
import { Observable } from 'rxjs';

class HttpClient {
  constructor(endpoint) {
    this.client = axios.create({
      baseURL: endpoint
    });
  }

  get(url, params) {
    return this.request(url, { method: 'GET', params });
  }

  post(url, data) {
    return this.request(url, { method: 'POST', data });
  }

  request(url, config) {
    const headers = this.getHeaders();

    return Observable
      .fromPromise(this.client.request({
        url,
        ...config,
        headers
      }))
      .map(response => response.data)
      .catch(err => {
        console.log(err)
        Observable.throw(err)
      })
  }

  getHeaders() {
    const token = localStorage.getItem('accessToken');
    if (!token) return axios.defaults.headers
    return {
      ...axios.defaults.headers,
      Authorization: `bearer ${token}`
    }
  }
}

export const apiClient = new HttpClient(API_URL);