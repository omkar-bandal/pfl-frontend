import { combineReducers } from "@reduxjs/toolkit";
import { coreReducer } from "./core.reducer";
import {purchaseReducer} from '@prime-fresh/purchase/modules';

export const rootReducer = combineReducers({...coreReducer, ...purchaseReducer});