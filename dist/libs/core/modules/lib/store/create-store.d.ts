import { Middleware, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

export declare function createStore<T>(reducer: Reducer<T> | ReducersMapObject, ...middlewares: Middleware[]): import('@reduxjs/toolkit').EnhancedStore<{}, never, import('@reduxjs/toolkit').Tuple<[import('redux').StoreEnhancer<{
    dispatch: import('redux-thunk').ThunkDispatch<{}, undefined, import('redux').UnknownAction>;
}>, import('redux').StoreEnhancer]>>;
