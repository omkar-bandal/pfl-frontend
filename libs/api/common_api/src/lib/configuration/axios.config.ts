import axios from 'axios';
//Vaishali
export const BASE_URL = "https://a5414b662566.ngrok-free.app"; //password: ZBzZinpxCl

//Shreenath
// export const BASE_URL = "https://f674205dfa5e.ngrok-free.app"; //password: P3@=MjZAn=

//Madhuri
// export const BASE_URL = "https://e5ae5c936567.ngrok-free.app";

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
