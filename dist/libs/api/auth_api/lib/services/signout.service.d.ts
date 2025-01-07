import { SignOutRequest, SignOutResponse } from '../models';

export declare const signoutService: (url: string, data: SignOutRequest) => Promise<SignOutResponse>;
