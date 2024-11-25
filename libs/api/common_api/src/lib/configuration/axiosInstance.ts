import axios from "axios";
import { COM_API_URL } from "../constants/common_api_url";

export const axiosInstance = axios.create({
  baseURL: COM_API_URL.BASE_URL,
  // withCredentials: true,
  headers: {
    'ngrok-skip-browser-warning': 'true',
    'Content-Type': 'multipart/form-data',
  },
});

// You can store the tokens in localStorage or any other secure storage.
const getAccessToken = () => localStorage.getItem('access_token');
const getRefreshToken = () => localStorage.getItem('refresh_token');

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    
    // Handle token expiration (401 error)
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = getRefreshToken();
      
      if (refreshToken) {
        try {
          // Make a request to refresh the token
          const { data } = await axios.post(`https://7759-182-156-141-17.ngrok-free.app/auth/refresh-token`, {
            refreshToken,
          });

          // Store new access token
          localStorage.setItem('accessToken', data.accessToken);

          // Retry the original request with the new token
          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }
    }
    
    return Promise.reject(error);
  }
);