import { IForgetPasswordReq, IResetPasswordReq, ISignInRequest, ISignInResponse, ISignOutRequest, ISignOutResponse } from '../models';
import { UseMutationResult } from '@tanstack/react-query';
import { ErrorModel, ResultModel } from '../../../../common_api/src/index.ts';

export declare function useSignIn(): UseMutationResult<ISignInResponse, ErrorModel, ISignInRequest, unknown>;
export declare function useSignOut(): UseMutationResult<ISignOutResponse, ErrorModel, ISignOutRequest, unknown>;
export declare function useForgetPassword(): UseMutationResult<string, ErrorModel, IForgetPasswordReq, unknown>;
export declare function useResetPassword(): UseMutationResult<ResultModel, ErrorModel, IResetPasswordReq, unknown>;
