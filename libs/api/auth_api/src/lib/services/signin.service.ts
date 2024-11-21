import { COM_API_URL, ErrorType } from '@prime-fresh/common_api';
import { SignInRequest, SignInResponse } from '../models';
import axios, { AxiosResponse } from "axios";

export const signinService = async (url: string, data: SignInRequest) => {
    try {
        const response: AxiosResponse<SignInResponse> = await axios.post(`${COM_API_URL.BASE_URL}${url}`, data, {
            headers: {
                // 'ngrok-skip-browser-warning': 'true',
                'Content-Type': 'application/json', 
            },
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const errorResponse: ErrorType = error.response?.data || {
                message: "An error occurred. Try after some time.",
            };
            throw new Error(errorResponse.message);
        } else {
            throw new Error("Unknown error occurred");
        }
    }
}