import { RootState } from '../store.inventory';
import { PostVehicleDispatchRegister } from '../../../../../../api/inventory_api/src/index.ts';

type VehicleDispatchRegisterState = {
    vehicleDispatchRegisterFormPreview: PostVehicleDispatchRegister | undefined;
};
export declare const setVehicleDispatchRegisterFormPreview: import('@reduxjs/toolkit').ActionCreatorWithOptionalPayload<PostVehicleDispatchRegister | undefined, "vehicleDispatchRegister/setVehicleDispatchRegisterFormPreview">;
export declare const vehicleDispatchRegisterStates: (store: RootState) => VehicleDispatchRegisterState;
export declare const vehicleDispatchRegisterReducer: import('redux').Reducer<VehicleDispatchRegisterState>;
export {};
