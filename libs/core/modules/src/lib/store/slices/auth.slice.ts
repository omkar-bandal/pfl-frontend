import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sliceConstant } from '../../constants';
import { AuthState, IEmployeePermissions, ILoggedInUserInfoRes } from '@prime-fresh/auth_api';
import { RootState } from '../store.core';

const initialState: AuthState = {
  isLoggedIn: false,
  loggedInUserInfo: null,
  employeePermissions: null,
};

const authSlice = createSlice({
  name: sliceConstant.AUTH,
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    checkAuth: (state) => {
      const isLoggedIn = localStorage.getItem('access_token');
      state.isLoggedIn = !!isLoggedIn;
    },
    setLoggedInUserInfo: (state, action: PayloadAction<ILoggedInUserInfoRes | null>) => {
      state.loggedInUserInfo = action.payload;
    },
    setEmployeePermissions: (state, action: PayloadAction<IEmployeePermissions[] | null>) => {
      state.employeePermissions = action.payload;
    },
  },
});

export const { setIsLoggedIn, checkAuth, setLoggedInUserInfo, setEmployeePermissions } = authSlice.actions;
export const authState = (state: RootState) => state.auth;
export const authActionCreators = {
  setIsLoggedIn,
  checkAuth,
  setLoggedInUserInfo,
  setEmployeePermissions,
};
export const authReducer = authSlice.reducer;
