import { RootState } from '../store.inventory';
import { IInwardRegister } from '../../../../../../api/inventory_api/src/index.ts';

type InwardRegisterState = {
    inwardRegisterFormPreview: IInwardRegister | undefined;
};
export declare const setInwardRegisterFormPreview: import('@reduxjs/toolkit').ActionCreatorWithOptionalPayload<IInwardRegister | undefined, "inwardRegister/setInwardRegisterFormPreview">;
export declare const inwardRegisterStates: (store: RootState) => InwardRegisterState;
export declare const inwardRegisterReducer: import('redux').Reducer<InwardRegisterState>;
export {};
