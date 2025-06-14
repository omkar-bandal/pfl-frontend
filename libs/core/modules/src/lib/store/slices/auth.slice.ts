import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sliceConstant } from '../../constants';
import {
  AuthState,
  EmployeeLevel,
  EmployeePermissions,
  LoggedInUserInfoRes,
  TokenRes,
} from '@prime-fresh/auth_api';
import { RootState } from '../store.core';

const initialState: AuthState = {
  isLoggedIn: false,
  showPassword: false,
  signinMethod: 'email',
  loggedInUserInfo: null,
  employeeLevel: null,
  employeePermissions: null,
};

const authSlice = createSlice({
  name: sliceConstant.AUTH,
  initialState,
  reducers: {
    setShowPassword: (state, action: PayloadAction<boolean>) => {
      state.showPassword = action.payload;
    },
    setSigninMethod: (state, action: PayloadAction<'email' | 'mobile'>) => {
      state.signinMethod = action.payload;
    },
    setTokens: (state, action: PayloadAction<TokenRes>) => {
      localStorage.setItem('access_token', action.payload.access_token);
      localStorage.setItem('refresh_token', action.payload.refresh_token);
      state.isLoggedIn = !!action.payload;
    },
    checkAuth: (state) => {
      const isLoggedIn = localStorage.getItem('access_token');
      state.isLoggedIn = !!isLoggedIn;
    },
    setLoggedInUserInfo: (
      state,
      action: PayloadAction<LoggedInUserInfoRes | null>
    ) => {
      state.loggedInUserInfo = action.payload;
    },
    setEmployeeLevel: (state, action: PayloadAction<EmployeeLevel | null>) => {
      state.employeeLevel = action.payload;
    },
    setEmployeePermissions: (
      state,
      action: PayloadAction<EmployeePermissions[] | null>
    ) => {
      state.employeePermissions = action.payload;
    },
  },
});

export const {
  setShowPassword,
  setSigninMethod,
  checkAuth,
  setTokens,
  setLoggedInUserInfo,
  setEmployeeLevel,
  setEmployeePermissions,
} = authSlice.actions;
export const authState = (state: RootState) => state.auth;
export const authActionCreators = {
  setShowPassword,
  setSigninMethod,
  checkAuth,
  setTokens,
  setLoggedInUserInfo,
  setEmployeeLevel,
  setEmployeePermissions,
};
export const authReducer = authSlice.reducer;
