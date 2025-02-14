import { LoggedInUserInfoRes } from "./auth.model";

export type AuthState = {
    isLoggedIn: boolean,
    showPassword: boolean,
    signinMethod: 'email' | 'mobile',
    loggedInUserInfo: LoggedInUserInfoRes | null,
}