import { RootState } from '../store.inventory';
import { ISecondSaleRegister } from '../../../../../../api/inventory_api/src/index.ts';

type SecondSaleRegisterState = {
    secondSaleRegisterFormPreview: Omit<ISecondSaleRegister, 'id'> | undefined;
};
export declare const setSecondSaleRegisterFormPreview: import('@reduxjs/toolkit').ActionCreatorWithOptionalPayload<Omit<ISecondSaleRegister, "id"> | undefined, "secondSaleRegister/setSecondSaleRegisterFormPreview">;
export declare const secondSaleRegisterStates: (store: RootState) => SecondSaleRegisterState;
export declare const secondSaleRegisterReducer: import('redux').Reducer<SecondSaleRegisterState>;
export {};
