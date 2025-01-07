import { SignInRequest, SignInResponse } from '../models';

export declare const signinService: (url: string, data: SignInRequest) => Promise<SignInResponse>;
