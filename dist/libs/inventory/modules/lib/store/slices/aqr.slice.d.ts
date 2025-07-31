import { RootState } from '../store.inventory';
import { IAQR } from '../../../../../../api/inventory_api/src/index.ts';

type AQRState = {
    aqrFormPreview: Omit<IAQR, 'id'> | undefined;
};
export declare const setAQRFormPreview: import('@reduxjs/toolkit').ActionCreatorWithOptionalPayload<Omit<IAQR, "id"> | undefined, "aqr/setAQRFormPreview">;
export declare const aqrStates: (store: RootState) => AQRState;
export declare const aqrReducer: import('redux').Reducer<AQRState>;
export {};
