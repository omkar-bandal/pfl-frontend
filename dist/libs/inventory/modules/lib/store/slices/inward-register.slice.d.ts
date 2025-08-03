import { RootState } from '../store.inventory';
import { IInwardRegister } from '../../../../../../api/inventory_api/src/index.ts';

type InwardRegisterState = {
    inwardRegisterFormPreview: Omit<IInwardRegister, 'id'> | undefined;
};
export declare const setInwardRegisterFormPreview: import('@reduxjs/toolkit').ActionCreatorWithOptionalPayload<Omit<IInwardRegister, "id"> | undefined, "inwardRegister/setInwardRegisterFormPreview">;
export declare const inwardRegisterStates: (store: RootState) => InwardRegisterState;
export declare const inwardRegisterReducer: import('redux').Reducer<InwardRegisterState>;
export {};
