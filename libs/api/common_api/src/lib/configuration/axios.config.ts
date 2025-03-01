import axios from 'axios';

export const BASE_URL = "https://be6d-182-156-141-17.ngrok-free.app";
// export const BASE_URL = "http://ec2-13-233-15-253.ap-south-1.compute.amazonaws.com";

export const createAxiosInstance = () => {
  return axios.create({
    baseURL: BASE_URL,
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': 'true',
    },
  });
};
