import { Client } from '../models';
import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export declare abstract class BaseService implements Client {
    protected static _axiosInstance: AxiosInstance;
    private service;
    constructor();
    static createService(): AxiosInstance;
    static setAccessToken(accessToken: string): void;
    static setRefreshToken(refreshToken: string): void;
    static refreshAccessToken(): Promise<string>;
    static setAuthHeaderInterceptor(): void;
    static setResponseInterceptor(): void;
    static handleSuccess<T>(response: AxiosResponse<T>): T;
    static handleError(error: AxiosError): Promise<unknown>;
    get<T>(path: string): Promise<T>;
    post<T>(path: string, data?: any): Promise<T>;
    postFormData<T>(path: string, data?: any): Promise<T>;
    put<T>(path: string, data?: any): Promise<T>;
    putFormData<T>(path: string, data: any): Promise<T>;
    patch<T>(path: string, data: any): Promise<T>;
    patchFormData<T>(path: string, data: any): Promise<T>;
    delete<T>(path: string): Promise<T>;
}
