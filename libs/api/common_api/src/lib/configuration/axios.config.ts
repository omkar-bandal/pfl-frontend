import axios from 'axios';
//Vaishali
// export const BASE_URL = "https://dfd440e51fc8.ngrok-free.app";

//Shreenath
// export const BASE_URL = "https://e66d35134122.ngrok-free.app";

//Madhuri
export const BASE_URL = "https://29db86355979.ngrok-free.app";

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
