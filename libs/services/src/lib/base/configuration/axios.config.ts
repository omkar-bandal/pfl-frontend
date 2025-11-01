import axios from 'axios';

//Local
// export const BASE_URL = "https://c448721c48ed.ngrok-free.app"; 

//Server
export const BASE_URL = "http://ec2-13-232-230-177.ap-south-1.compute.amazonaws.com";

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

