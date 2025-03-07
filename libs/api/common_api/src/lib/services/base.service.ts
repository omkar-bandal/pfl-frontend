/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { Client, ErrorModel } from '../models';
import { BASE_URL, createAxiosInstance } from '../configuration/axios.config';

// Extend AxiosRequestConfig to include a custom _retry flag
interface AxiosRequestConfigWithRetry extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

export abstract class  BaseService implements Client {
  protected static _axiosInstance: AxiosInstance;
  private service: AxiosInstance;
  // private static _accessToken: string;
  // private static _refreshToken: string;

  constructor() {
    this.service = BaseService.createService();
  }

  static createService() {
    if (!BaseService._axiosInstance) {
      BaseService._axiosInstance = createAxiosInstance();
      BaseService.setAuthHeaderInterceptor();
      BaseService._axiosInstance.interceptors.response.use(BaseService.handleSuccess, BaseService.handleError);
    }
    return BaseService._axiosInstance;
  }

  // static setAuthToken(accessToken: string, refreshToken: string) {
  //   this._accessToken = accessToken;
  //   this._refreshToken = refreshToken;
  //   console.log("Access: ", this._accessToken);
  //   console.log("Refresh: ", this._refreshToken);
  // }

  static setAccessToken(accessToken: string) {
    localStorage.setItem("access_token", accessToken);
  }

  static setRefreshToken(refreshToken: string) {
    localStorage.setItem("refresh_token", refreshToken);
  }
  // Method to call your refresh endpoint. Adjust URL and payload as needed.
  static async refreshAccessToken(): Promise<string> {
    try {
      const refreshToken = localStorage.getItem("refresh_token");
      // Use a separate axios instance without interceptors to avoid interceptor loops
      const response = await axios.post(`${BASE_URL}/auth/refresh-token`, {
        refreshToken
      });
      return response.data.access_token;
    } catch (error) {
      return Promise.reject(`Unable to refresh access token.+${error}`);
    }
  }

  static setAuthHeaderInterceptor() {
    BaseService._axiosInstance.interceptors.request.use(
      function (config: InternalAxiosRequestConfig<any>) {
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      },
    );
  }
  static setResponseInterceptor() {
    BaseService._axiosInstance.interceptors.response.use(
      BaseService.handleSuccess,
      BaseService.handleError
    );
  }

  static handleSuccess<T>(response: AxiosResponse<T>) {
    return response.data;
  }

  // Updated error handler to catch 401 errors and try to refresh the token
  static async handleError(error: AxiosError): Promise<unknown> {
    const originalRequest = error.config as AxiosRequestConfigWithRetry;

    // Check if error response exists and is 401 (Unauthorized)
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Attempt to refresh the access token using the refresh token
        const newAccessToken = await BaseService.refreshAccessToken();
        // Set the new access token
        BaseService.setAccessToken(newAccessToken);

       // Update the authorization header for the original request using the set method.
      (originalRequest.headers as any).set('Authorization', `Bearer ${newAccessToken}`);


        // Retry the original request with the new token
        return BaseService._axiosInstance(originalRequest);
      } catch (refreshError) {
        // Optionally handle refresh token failure (e.g., log out the user)
        console.error('Refresh token failed', refreshError);
        // Fall through to return a generic error below.
      }
    }

    // For any other errors, return a generic error model
    const errorModel: ErrorModel = { name: 'Error', message: 'Something went wrong!' };
    if (error.response && error.response.data) {
      errorModel.message = (error as any).response.data?.message;
    }
    return Promise.reject(errorModel);
  }

  get<T>(path: string): Promise<T> {
    return this.service.get(path);
  }

  post<T>(path: string, data?: any): Promise<T> {
    return this.service.post(path, data);
  }

  postFormData<T>(path: string, data?: any): Promise<T> {
    return this.service.post(path, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  put<T>(path: string, data?: any): Promise<T> {
    return this.service.put(path, data);
  }

  putFormData<T>(path: string, data: any): Promise<T> {
    return this.service.put(path, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  patch<T>(path: string, data: any): Promise<T> {
    return this.service.patch(path, data);
  }

  patchFormData<T>(path: string, data: any): Promise<T> {
    return this.service.patch(path, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  delete<T>(path: string): Promise<T> {
    return this.service.delete(path);
  }
}
