import { Middleware, Reducer, ReducersMapObject, combineReducers, configureStore } from '@reduxjs/toolkit';
// import { coreReducer } from './core.reducer';
import { rootReducer } from './root.reducer';

export function createStore<T>(reducer: Reducer<T> | ReducersMapObject, ...middlewares: Middleware[]) {
  const allReducer = combineReducers({ ...rootReducer, ...reducer });

  return configureStore({
    // devTools: window.isDebug,
    reducer: allReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: true }).concat([...middlewares]),
  });
}
