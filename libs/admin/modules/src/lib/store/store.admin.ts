import { configureStore } from '@reduxjs/toolkit';
import { adminReducer } from './admin.reducer';

export const storeAdmin = configureStore({
  reducer: adminReducer,
});

export type RootState = ReturnType<typeof storeAdmin.getState>;

export type AppDispatch = typeof storeAdmin.dispatch;
