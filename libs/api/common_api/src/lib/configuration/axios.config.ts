import axios from 'axios';

//Local
export const BASE_URL = "https://635cc59cbc84.ngrok-free.app"; 

//Server
// export const BASE_URL = "http://ec2-3-110-83-171.ap-south-1.compute.amazonaws.com";

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

