import { configureStore } from "@reduxjs/toolkit";
import { salesReducer } from "./sales.reducer";

export const storeSales = configureStore({
    reducer: salesReducer,
});

export type RootState = ReturnType<typeof storeSales.getState>;

export type AppDispatch = typeof storeSales.dispatch;