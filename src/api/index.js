import axios from "axios";

//https://axios-http.com/docs/config_defaults
axios.defaults.baseURL = "https://api.thecatapi.com";

export function get(path) {
  return axios.get(path);
}

export function post(path, data) {
  return axios.post(path, data);
}
