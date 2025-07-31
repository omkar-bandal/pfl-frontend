import { IForgetPasswordReq, IResetPasswordReq, ISignInRequest, ISignInResponse, ISignOutRequest, ISignOutResponse } from '../models';
import { BaseService, ResultModel } from '../../../../common_api/src/index.ts';

export declare class AuthenticationService extends BaseService {
    private static _instance;
    static getInstance(): AuthenticationService;
    signin(data: ISignInRequest): Promise<ISignInResponse>;
    signout(data: ISignOutRequest): Promise<ISignOutResponse>;
    forgetPassword(data: IForgetPasswordReq): Promise<any>;
    resetPassword(data: IResetPasswordReq): Promise<ResultModel>;
}
