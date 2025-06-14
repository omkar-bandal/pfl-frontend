import { inventoryReducer } from "./inventory.reducer";
import { configureStore } from "@reduxjs/toolkit";

export const storeInventory = configureStore({
    reducer: inventoryReducer,
});

export type RootState = ReturnType<typeof storeInventory.getState>;

export type AppDispatch = typeof storeInventory.dispatch;