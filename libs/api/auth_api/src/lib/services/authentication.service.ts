import {BaseService} from "@prime-fresh/common_api";
import { SignInRequest, SignInResponse, SignOutRequest, SignOutResponse } from "../models";
import { authApiUrlConstants } from "../constants";

export class AuthenticationService extends BaseService {
    private static _instance: AuthenticationService;
  
    public static getInstance(): AuthenticationService {
      return this._instance || (this._instance = new this());
    }
  
    signin(data: SignInRequest): Promise<SignInResponse> {
      const url = authApiUrlConstants.SIGN_IN;
      return this.post(url, data);
    }

    signout(data: SignOutRequest): Promise<SignOutResponse> {
        const url = authApiUrlConstants.SIGN_OUT;
        return this.post(url, data);
    }
}