import axios from "axios";

export const covid19API = axios.create({
  baseURL: process.env.API_COVID19,
});

export default covid19API;
