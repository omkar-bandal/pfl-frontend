import { LoggedInUserInfoRes } from "./loggedInUserInfoRes.type";

export type AuthState = {
    isLoggedIn: boolean,
    showPassword: boolean,
    signinMethod: 'email' | 'mobile',
    loggedInUserInfo: LoggedInUserInfoRes | null,
}