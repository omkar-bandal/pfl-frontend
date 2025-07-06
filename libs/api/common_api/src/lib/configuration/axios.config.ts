import axios from 'axios';

export const BASE_URL = "https://f8a6-2409-40c2-102a-2f66-f912-e5a5-5b43-f23e.ngrok-free.app";
// export const BASE_URL = "";
// export const BASE_URL = "http://ec2-35-154-225-84.ap-south-1.compute.amazonaws.com";

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
