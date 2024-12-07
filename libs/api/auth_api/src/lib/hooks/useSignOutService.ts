import { useMutation } from "@tanstack/react-query";
import { SignOutRequest, SignOutResponse } from "../models";
import { signoutService } from "../services/signout.service";

export const useSignOutService = (url: string) => {
    return useMutation<SignOutResponse, Error, SignOutRequest, unknown>({
      mutationFn: (data) => signoutService(url, data),
      onSuccess: () => localStorage.clear(),
      onError: (error) => {
        console.error('Sign-out error:', error);
      },
    });
  };