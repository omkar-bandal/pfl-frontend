import { GetVehicleDispatchRegister, PostVehicleDispatchRegister } from '../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../common_api/src/index.ts';

export declare class VehicleDispatchRegisterServices extends BaseService {
    private static _instance;
    static getInstance(): VehicleDispatchRegisterServices;
    createVehicleDispatchRegister(data: PostVehicleDispatchRegister): Promise<ResultModel>;
    getAllVehicleDispatchRegisters(queryParams?: QueryParams): Promise<ApiBaseState<GetVehicleDispatchRegister[]>>;
    getVehicleDispatchRegisterForViewById(id: string): Promise<ApiBaseState<GetVehicleDispatchRegister>>;
    getVehicleDispatchRegisterForUpdateById(id: string): Promise<ApiBaseState<GetVehicleDispatchRegister>>;
    updateVehicleDispatchRegister(id: string, data: GetVehicleDispatchRegister): Promise<ResultModel>;
    deleteVehicleDispatchRegisterById(id: string): Promise<ResultModel>;
}
