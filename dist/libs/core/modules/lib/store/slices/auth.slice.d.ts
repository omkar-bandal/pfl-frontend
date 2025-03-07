import { RootState } from '../store.core';
import { AuthState, LoggedInUserInfoRes, TokenRes } from '../../../../../../api/auth_api/src/index.ts';

export declare const setShowPassword: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<`${string}/setShowPassword`>, setSigninMethod: import('@reduxjs/toolkit').ActionCreatorWithPayload<"email" | "mobile", `${string}/setSigninMethod`>, checkAuth: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<`${string}/checkAuth`>, setDeptId: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, `${string}/setDeptId`>, setTokens: import('@reduxjs/toolkit').ActionCreatorWithPayload<TokenRes, `${string}/setTokens`>, setLoggedInUserInfo: import('@reduxjs/toolkit').ActionCreatorWithPayload<LoggedInUserInfoRes | null, `${string}/setLoggedInUserInfo`>;
export declare const authState: (state: RootState) => AuthState;
export declare const authActionCreators: {
    setShowPassword: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<`${string}/setShowPassword`>;
    setSigninMethod: import('@reduxjs/toolkit').ActionCreatorWithPayload<"email" | "mobile", `${string}/setSigninMethod`>;
    checkAuth: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<`${string}/checkAuth`>;
    setTokens: import('@reduxjs/toolkit').ActionCreatorWithPayload<TokenRes, `${string}/setTokens`>;
    setLoggedInUserInfo: import('@reduxjs/toolkit').ActionCreatorWithPayload<LoggedInUserInfoRes | null, `${string}/setLoggedInUserInfo`>;
    setDeptId: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, `${string}/setDeptId`>;
};
export declare const authReducer: import('redux').Reducer<AuthState>;
