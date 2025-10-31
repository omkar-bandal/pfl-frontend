import { IEmployeePermissions, ILoggedInUserInfoRes } from "./auth.model";

export type AuthState = {
    isLoggedIn: boolean,
    loggedInUserInfo: ILoggedInUserInfoRes | null,
    employeePermissions: IEmployeePermissions[] | null,
    isForgetPswdDialog: boolean,
}