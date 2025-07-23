import axios from "axios";

const instance = axios.create({
  baseURL: "http://10.225.63.192:3000",
});

export default instance;
