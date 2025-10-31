import { configureStore } from '@reduxjs/toolkit';
import { sharedReducer } from './shared.reducer';

export const storeShared = configureStore({
  reducer: sharedReducer,
});

export type RootState = ReturnType<typeof storeShared.getState>;

export type AppDispatch = typeof storeShared.dispatch;
