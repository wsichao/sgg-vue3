import axios from "axios";
export function login(data) {
  return axios.post('http://127.0.0.1:8080/wscApi/login', data)
}