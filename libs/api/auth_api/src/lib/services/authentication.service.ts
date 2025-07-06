import {BaseService} from "@prime-fresh/common_api";
import { ISignInRequest, ISignInResponse, ISignOutRequest, ISignOutResponse } from "../models";
import { authApiUrlConstants } from "../constants";

export class AuthenticationService extends BaseService {
    private static _instance: AuthenticationService;
  
    public static getInstance(): AuthenticationService {
      return this._instance || (this._instance = new this());
    }
  
    signin(data: ISignInRequest): Promise<ISignInResponse> {
      const url = authApiUrlConstants.SIGN_IN;
      return this.post(url, data);
    }

    signout(data: ISignOutRequest): Promise<ISignOutResponse> {
        const url = authApiUrlConstants.SIGN_OUT;
        return this.post(url, data);
    }
}