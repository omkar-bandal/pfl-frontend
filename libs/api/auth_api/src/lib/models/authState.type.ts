import { EmployeeLevel, EmployeePermissions, LoggedInUserInfoRes } from "./auth.model";

export type AuthState = {
    isLoggedIn: boolean,
    showPassword: boolean,
    signinMethod: 'email' | 'mobile',
    loggedInUserInfo: LoggedInUserInfoRes | null,
    employeeLevel: EmployeeLevel | null,
    employeePermissions: EmployeePermissions[] | null,
}