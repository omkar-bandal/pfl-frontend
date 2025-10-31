/* eslint-disable @typescript-eslint/no-explicit-any */
import { authApiUrls } from '../constants';
import { BaseService, ResultModel } from '../../base';
import {
  IForgetPasswordReq,
  IResetPasswordReq,
  ISignInRequest,
  ISignInResponse,
  ISignOutRequest,
  ISignOutResponse,
} from '../models';

export class AuthenticationService extends BaseService {
  private static _instance: AuthenticationService;

  public static getInstance(): AuthenticationService {
    return this._instance || (this._instance = new this());
  }

  signin(data: ISignInRequest): Promise<ISignInResponse> {
    const url = authApiUrls.SIGN_IN;
    return this.post(url, data);
  }

  signout(data: ISignOutRequest): Promise<ISignOutResponse> {
    const url = authApiUrls.SIGN_OUT;
    return this.post(url, data);
  }

  forgetPassword(data: IForgetPasswordReq): Promise<any> {
    const url = authApiUrls.FORGET_PASSWORD;
    return this.post(url, data);
  }
  resetPassword(data: IResetPasswordReq): Promise<ResultModel> {
    const url = authApiUrls.RESET_PASSWORD;
    return this.post(url, data);
  }
}
