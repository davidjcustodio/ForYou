import axios from 'axios';

// TEST: URL
// LIVE: URL
class Service {
  constructor() {
    const Service = axios.create({
      baseURL: 'http://MYURL.COM',
      timeout: 10000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    Service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.Service = Service;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = error => {
    return error;
  };
  get(path, params, callback) {
    return this.Service.get(path, {
      params: params,
    }).then(response => callback(response));
  }

  patch(path, payload, callback) {
    return this.Service.request({
      method: 'PATCH',
      url: path,
      responseType: 'json',
      data: payload,
    }).then(response => callback(response));
  }

  post(path, payload, callback) {
    return this.Service.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload,
    }).then(response => callback(response));
  }
}

export default new Service();
