import { IVehicleDispatchRegister } from '../models';
import { apiUrls } from '../constants';
import { QueryParams } from '../../shared';
import { ApiBaseState, BaseService, ResultModel, buildApiUrl } from '../../base';

export class VehicleDispatchRegisterServices extends BaseService {
  private static _instance: VehicleDispatchRegisterServices;

  public static getInstance(): VehicleDispatchRegisterServices {
    return this._instance || (this._instance = new this());
  }

  createVehicleDispatchRegister(data: Omit<IVehicleDispatchRegister, 'id'>): Promise<ResultModel> {
    const url = apiUrls.CREATE_VEHICLE_DISPATCH_REGISTER;
    return this.post(url, data);
  }

  getAllVehicleDispatchRegisters(
    queryParams?: QueryParams,
    search?: string | null
  ): Promise<ApiBaseState<IVehicleDispatchRegister[]>> {
    const url = buildApiUrl(apiUrls.GET_ALL_VEHICLE_DISPATCH_REGISTERS, null, queryParams, search);
    return this.get(url);
  }

  getVehicleDispatchRegisterForViewById(id: string): Promise<ApiBaseState<IVehicleDispatchRegister>> {
    const url = buildApiUrl(apiUrls.GET_VEHICLE_DISPATCH_REGISTER_FOR_VIEW_BY_ID, id);
    return this.get(url);
  }

  getVehicleDispatchRegisterForUpdateById(id: string): Promise<ApiBaseState<IVehicleDispatchRegister>> {
    const url = buildApiUrl(apiUrls.GET_VEHICLE_DISPATCH_REGISTER_FOR_UPDATE_BY_ID, id);
    return this.get(url);
  }

  updateVehicleDispatchRegister(id: string, data: IVehicleDispatchRegister): Promise<ResultModel> {
    const url = buildApiUrl(apiUrls.UPDATE_VEHICLE_DISPATCH_REGISTER, id);
    return this.patch(url, data);
  }

  deleteVehicleDispatchRegisterById(id: string): Promise<ResultModel> {
    const url = buildApiUrl(apiUrls.DELETE_VEHICLE_DISPATCH_REGISTER, id);
    return this.delete(url);
  }
}
