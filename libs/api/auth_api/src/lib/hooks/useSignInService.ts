import { SignInRequest, SignInResponse } from '../models';
import { useMutation } from '@tanstack/react-query';
import { signinService } from '../services/signin.service';

export const useSignInService = (url: string) => {
  return useMutation<SignInResponse, Error, SignInRequest, unknown>({
    mutationFn: (data) => signinService(url, data),
    onSuccess: (data) => {
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);
      localStorage.setItem('role', data.role);
      localStorage.setItem('department', data.department);
    },
    onError: (error) => {
      console.error('Sign-in error:', error);
    },
  });
};
