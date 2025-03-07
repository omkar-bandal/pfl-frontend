import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./root.reducer";

export const coreStore = configureStore({
  reducer: rootReducer,
})
export type RootState = ReturnType<typeof coreStore.getState>;

export type AppDispatch = typeof coreStore.dispatch;

