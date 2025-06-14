import { ErrorModel } from "@prime-fresh/common_api";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { SignInRequest, SignInResponse, SignOutRequest, SignOutResponse } from "../models";
import { AuthenticationService } from "../services";

export function useSignIn(): UseMutationResult<SignInResponse, ErrorModel, SignInRequest, unknown> {
    return useMutation<SignInResponse, ErrorModel, SignInRequest, unknown>({
        mutationKey: ['sign-in'],
        mutationFn: (data) => AuthenticationService.getInstance().signin(data),
        onSuccess: (result) => {
            localStorage.setItem('access_token', result.access_token);
            localStorage.setItem('refresh_token', result.refresh_token);
            localStorage.setItem('userName', result.userName);
            localStorage.setItem('userId', result.id);
        }
    });
}

export function useSignOut(): UseMutationResult<SignOutResponse, ErrorModel, SignOutRequest, unknown> {
    return useMutation<SignOutResponse, ErrorModel, SignOutRequest, unknown>({
        mutationKey: ['sign-out'],
        mutationFn: (data) => AuthenticationService.getInstance().signout(data),
    });
}