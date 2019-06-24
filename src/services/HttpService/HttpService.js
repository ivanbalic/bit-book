import {
  authHeader,
  getRequestHeader,
  putRequestHeader,
  postRequestHeader,
  deleteRequestHeader
} from "../../shared/headers";

class HttpService {
  get(url) {
    return fetch(url, getRequestHeader).then(response => response.json());
  }

  post(url, payload) {
    return fetch(url, postRequestHeader(payload)).then(response => {
      const { status } = response;
      if (status >= 200 && status < 300) {
        return "Success!";
      }
      throw new Error("Faild!");
    });
  }

  put(url, payload) {
    return fetch(url, putRequestHeader(payload)).then(response => {
      const { status, statusText } = response;
      if (status >= 200 && status < 300) {
        return response;
      }
      return Promise.reject(`${status} ${statusText}`);
    });
  }

  delete(url) {
    return fetch(url, deleteRequestHeader).then(response => response.json());
  }

  authentication(url, payload) {
    return fetch(url, authHeader(payload)).then(response => response.json());
  }
}

export const httpService = new HttpService();
