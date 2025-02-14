import { SignOutResponse } from '../models';

export declare const useSignOutService: (url: string) => import('@tanstack/react-query').UseMutationResult<SignOutResponse, Error, import('../models').TokenRes, unknown>;
