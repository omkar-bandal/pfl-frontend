import { configureStore } from '@reduxjs/toolkit';
import { operationsReducer } from './operations.reducer';

export const oprationsStore = configureStore({
  reducer: operationsReducer,
});

export type RootState = ReturnType<typeof oprationsStore.getState>;

export type AppDispatch = typeof oprationsStore.dispatch;
