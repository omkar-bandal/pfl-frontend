import { TokenRes } from './tokenRes.type';
import { LoggedInUserInfoRes } from './loggedInUserInfoRes.type';

export type SignInResponse = TokenRes & LoggedInUserInfoRes & {
    status: string;
};
