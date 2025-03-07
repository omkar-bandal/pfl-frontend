import { SignInRequest, SignInResponse, SignOutRequest, SignOutResponse } from '../models';
import { UseMutationResult } from '@tanstack/react-query';
import { ErrorModel } from '../../../../common_api/src/index.ts';

export declare function useSignIn(): UseMutationResult<SignInResponse, ErrorModel, SignInRequest, unknown>;
export declare function useSignOut(): UseMutationResult<SignOutResponse, ErrorModel, SignOutRequest, unknown>;
