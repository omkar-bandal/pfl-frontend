import { SignInRequest, SignInResponse, SignOutRequest, SignOutResponse } from '../models';
import { BaseService } from '../../../../common_api/src/index.ts';

export declare class AuthenticationService extends BaseService {
    private static _instance;
    static getInstance(): AuthenticationService;
    signin(data: SignInRequest): Promise<SignInResponse>;
    signout(data: SignOutRequest): Promise<SignOutResponse>;
}
