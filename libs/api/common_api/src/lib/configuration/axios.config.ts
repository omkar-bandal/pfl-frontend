import axios from 'axios';
//Vaishali
// export const BASE_URL = "https://8ac98a22623b.ngrok-free.app";

//Shreenath
export const BASE_URL = "https://79089bf9d6a1.ngrok-free.app";

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
