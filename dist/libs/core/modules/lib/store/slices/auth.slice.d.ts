import { RootState } from '../store.core';
import { AuthState, IEmployeePermissions, ILoggedInUserInfoRes } from '../../../../../../api/auth_api/src/index.ts';

export declare const setIsLoggedIn: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, `${string}/setIsLoggedIn`>, checkAuth: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<`${string}/checkAuth`>, setLoggedInUserInfo: import('@reduxjs/toolkit').ActionCreatorWithPayload<ILoggedInUserInfoRes | null, `${string}/setLoggedInUserInfo`>, setEmployeePermissions: import('@reduxjs/toolkit').ActionCreatorWithPayload<IEmployeePermissions[] | null, `${string}/setEmployeePermissions`>, closeForgetPasswordDialog: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<`${string}/closeForgetPasswordDialog`>, openForgetPasswordDialog: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<`${string}/openForgetPasswordDialog`>;
export declare const authState: (state: RootState) => AuthState;
export declare const authActionCreators: {
    setIsLoggedIn: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, `${string}/setIsLoggedIn`>;
    checkAuth: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<`${string}/checkAuth`>;
    setLoggedInUserInfo: import('@reduxjs/toolkit').ActionCreatorWithPayload<ILoggedInUserInfoRes | null, `${string}/setLoggedInUserInfo`>;
    setEmployeePermissions: import('@reduxjs/toolkit').ActionCreatorWithPayload<IEmployeePermissions[] | null, `${string}/setEmployeePermissions`>;
    openForgetPasswordDialog: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<`${string}/openForgetPasswordDialog`>;
    closeForgetPasswordDialog: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<`${string}/closeForgetPasswordDialog`>;
};
export declare const authReducer: import('redux').Reducer<AuthState>;
