import axios from 'axios';

<<<<<<< HEAD
export const BASE_URL = "https://9c42-182-156-141-17.ngrok-free.app";
// export const BASE_URL = "http://ec2-13-233-15-253.ap-south-1.compute.amazonaws.com";
=======
// export const BASE_URL = "https://9345-182-156-141-17.ngrok-free.app";
export const BASE_URL = "http://ec2-35-154-13-187.ap-south-1.compute.amazonaws.com";
>>>>>>> master

export const createAxiosInstance = () => {
  return axios.create({
    baseURL: BASE_URL,
<<<<<<< HEAD
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': 'true',
=======
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      // 'ngrok-skip-browser-warning': 'true',
>>>>>>> master
    },
  });
};
