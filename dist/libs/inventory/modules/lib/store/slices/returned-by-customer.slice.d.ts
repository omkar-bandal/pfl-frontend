import { RootState } from '../store.inventory';
import { IReturnByCustomer } from '../../../../../../api/inventory_api/src/index.ts';

type ReturnedByCustomerState = {
    rbcFormPreview: Omit<IReturnByCustomer, 'id'> | null;
};
export declare const setRBCFormPreview: import('@reduxjs/toolkit').ActionCreatorWithPayload<Omit<IReturnByCustomer, "id"> | null, "rbc/setRBCFormPreview">;
export declare const rbcStates: (store: RootState) => ReturnedByCustomerState;
export declare const returnedByCustomerReducer: import('redux').Reducer<ReturnedByCustomerState>;
export {};
