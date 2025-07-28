import { ErrorModel, ResultModel } from "@prime-fresh/common_api";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { IForgetPasswordReq, IResetPasswordReq, ISignInRequest, ISignInResponse, ISignOutRequest, ISignOutResponse } from "../models";
import { AuthenticationService } from "../services";

export function useSignIn(): UseMutationResult<ISignInResponse, ErrorModel, ISignInRequest, unknown> {
    return useMutation<ISignInResponse, ErrorModel, ISignInRequest, unknown>({
        mutationKey: ['sign-in'],
        mutationFn: (data) => AuthenticationService.getInstance().signin(data),
        onSuccess: (result) => {
            localStorage.setItem('access_token', result.access_token);
            localStorage.setItem('refresh_token', result.refresh_token);
        }
    });
}

export function useSignOut(): UseMutationResult<ISignOutResponse, ErrorModel, ISignOutRequest, unknown> {
    return useMutation<ISignOutResponse, ErrorModel, ISignOutRequest, unknown>({
        mutationKey: ['sign-out'],
        mutationFn: (data) => AuthenticationService.getInstance().signout(data),
    });
}

export function useForgetPassword(): UseMutationResult<string, ErrorModel, IForgetPasswordReq, unknown> {
    return useMutation<string, ErrorModel, IForgetPasswordReq, unknown>({
        mutationKey: ['forget-password'],
        mutationFn: (uid) => AuthenticationService.getInstance().forgetPassword(uid),
    });
}

export function useResetPassword(): UseMutationResult<ResultModel, ErrorModel, IResetPasswordReq, unknown> {
    return useMutation<ResultModel, ErrorModel, IResetPasswordReq, unknown>({
        mutationKey: ['reset-password'],
        mutationFn: (data) => AuthenticationService.getInstance().resetPassword(data),
    });
}

