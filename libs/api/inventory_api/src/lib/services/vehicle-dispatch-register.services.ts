import { ApiBaseState, BaseService, QueryParams, ResultModel } from "@prime-fresh/common_api";
import { GetVehicleDispatchRegister, PostVehicleDispatchRegister } from "../models";
import { inventoryApiUrl } from "../constants";

export class VehicleDispatchRegisterServices extends BaseService {
    private static _instance: VehicleDispatchRegisterServices;

    public static getInstance(): VehicleDispatchRegisterServices {
        return this._instance || (this._instance = new this());
    }

    createVehicleDispatchRegister(data: PostVehicleDispatchRegister): Promise<ResultModel> {
        const url = inventoryApiUrl.CREATE_VEHICLE_DISPATCH_REGISTER;
        return this.post(url, data);
    }

    getAllVehicleDispatchRegisters(queryParams?: QueryParams): Promise<ApiBaseState<GetVehicleDispatchRegister[]>> {
        const url = inventoryApiUrl.GET_ALL_VEHICLE_DISPATCH_REGISTERS(queryParams);
        return this.get(url);
    }

    getVehicleDispatchRegisterById(id: string): Promise<ApiBaseState<GetVehicleDispatchRegister>> {
        const url = `${inventoryApiUrl.GET_VEHICLE_DISPATCH_REGISTER_BY_ID}/${id}`;
        return this.get(url);
    }

    updateVehicleDispatchRegister(id: string, data: GetVehicleDispatchRegister): Promise<ResultModel> {
        const url = `${inventoryApiUrl.UPDATE_VEHICLE_DISPATCH_REGISTER}/${id}`;
        return this.patch(url, data);
    }

    deleteVehicleDispatchRegisterById(id: string): Promise<ResultModel> {
        const url = `${inventoryApiUrl.DELETE_VEHICLE_DISPATCH_REGISTER}/${id}`;
        return this.delete(url);
    }
}