import { combineReducers } from '@reduxjs/toolkit';
import { coreReducer } from './core.reducer';
import { adminReducer } from '@prime-fresh/admin/modules';
import { operationsReducer } from '@prime-fresh/operations/modules';
import { sharedReducer } from '@prime-fresh/shared/modules';

export const rootReducer = combineReducers({
  ...coreReducer,
  ...adminReducer,
  ...operationsReducer,
  ...sharedReducer,
});
