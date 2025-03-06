import { LoggedInUserInfoRes } from "./auth.model";

export type AuthState = {
    isLoggedIn: boolean,
    showPassword: boolean,
    signinMethod: 'email' | 'mobile',
    deptId: string,
    loggedInUserInfo: LoggedInUserInfoRes | null,
}