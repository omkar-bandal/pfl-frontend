import { SignOutRequest, SignOutResponse } from '../models';

export declare const useSignOutService: (url: string) => import('@tanstack/react-query').UseMutationResult<SignOutResponse, Error, SignOutRequest, unknown>;
