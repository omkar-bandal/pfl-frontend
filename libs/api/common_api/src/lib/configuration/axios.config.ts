import axios from 'axios';

// export const BASE_URL = "https://4ab7-182-156-141-17.ngrok-free.app";
export const BASE_URL = "http://ec2-35-154-13-187.ap-south-1.compute.amazonaws.com";

export const createAxiosInstance = () => {
  return axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      // 'ngrok-skip-browser-warning': 'true',
    },
  });
};
