import { GetVehicleDispatchRegister, PostVehicleDispatchRegister } from '../models';
import { ApiBaseState, BaseService, ResultModel } from '../../../../common_api/src/index.ts';

export declare class VehicleDispatchRegisterServices extends BaseService {
    private static _instance;
    static getInstance(): VehicleDispatchRegisterServices;
    createVehicleDispatchRegister(data: PostVehicleDispatchRegister): Promise<ResultModel>;
    getAllVehicleDispatchRegisters(): Promise<ApiBaseState<GetVehicleDispatchRegister[]>>;
    getVehicleDispatchRegisterById(id: string): Promise<ApiBaseState<GetVehicleDispatchRegister>>;
    updateVehicleDispatchRegister(id: string, data: GetVehicleDispatchRegister): Promise<ResultModel>;
    deleteVehicleDispatchRegisterById(id: string): Promise<ResultModel>;
}
