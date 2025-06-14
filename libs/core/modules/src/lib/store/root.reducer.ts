import { combineReducers } from '@reduxjs/toolkit';
import { coreReducer } from './core.reducer';
import { purchaseReducer } from '@prime-fresh/purchase/modules';
import { adminReducer } from '@prime-fresh/admin/modules';
import { inventoryReducer} from '@prime-fresh/inventory/modules';

export const rootReducer = combineReducers({
  ...coreReducer,
  ...adminReducer,
  ...purchaseReducer,
  ...inventoryReducer,
});
