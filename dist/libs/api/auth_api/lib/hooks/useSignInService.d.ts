import { SignInRequest, SignInResponse } from '../models';

export declare const useSignInService: (url: string) => import('@tanstack/react-query').UseMutationResult<SignInResponse, Error, SignInRequest, unknown>;
