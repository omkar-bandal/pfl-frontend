import axios from 'axios';
//Vaishali
// export const BASE_URL = "https://1ce72606753c.ngrok-free.app";

//Shreenath
export const BASE_URL = "https://64bd834426e1.ngrok-free.app";

//Server
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
