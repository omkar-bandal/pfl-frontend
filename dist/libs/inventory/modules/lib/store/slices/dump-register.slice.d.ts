import { RootState } from '../store.inventory';
import { IDumpRegister } from '../../../../../../api/inventory_api/src/index.ts';

type DumpRegisterState = {
    dumpRegisterFormPreview: IDumpRegister | undefined;
};
export declare const setDumpRegisterFormPreview: import('@reduxjs/toolkit').ActionCreatorWithOptionalPayload<IDumpRegister | undefined, "dumpRegister/setDumpRegisterFormPreview">;
export declare const dumpRegisterStates: (store: RootState) => DumpRegisterState;
export declare const dumpRegisterReducer: import('redux').Reducer<DumpRegisterState>;
export {};
