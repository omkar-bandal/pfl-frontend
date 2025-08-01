import axios from 'axios';

//Local
// export const BASE_URL = "https://b0b4a3548afa.ngrok-free.app"; 

//Server
export const BASE_URL = "http://ec2-3-111-34-32.ap-south-1.compute.amazonaws.com";

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
