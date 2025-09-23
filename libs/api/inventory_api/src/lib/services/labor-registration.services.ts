import { ApiBaseState, BaseService, QueryParams, ResultModel, buildApiUrl } from "@prime-fresh/common_api";
import { ILaborRegistration } from "../models";
import { inventoryApiUrl } from "../constants";

export class LaborRegistrationServices extends BaseService {
    private static _instance: LaborRegistrationServices;

    public static getInstance(): LaborRegistrationServices {
        return this._instance || (this._instance = new this());
    }

    createLaborRegistration(data: Omit<ILaborRegistration, 'id'>): Promise<ResultModel> {
        const url = inventoryApiUrl.CREATE_LABOR_REGISTRATION;
        return this.post(url, data);
    }

    getAllRegistreredLabors(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<ILaborRegistration[]>> {
        const url = buildApiUrl(inventoryApiUrl.GET_ALL_REGISTERED_LABORS, null, queryParams, search);
        return this.get(url);
    }

    getRegistreredLaborById(id: string): Promise<ApiBaseState<ILaborRegistration>> {
        const url = buildApiUrl(inventoryApiUrl.GET_REGISTERED_LABOR_BY_ID, id);
        return this.get(url);
    }

    updateRegistreredLabor(id: string, data: ILaborRegistration): Promise<ResultModel> {
        const url = buildApiUrl(inventoryApiUrl.UPDATE_REGISTERED_LABOR, id);
        return this.patch(url, data);
    }

    deleteRegistreredLaborById(id: string): Promise<ResultModel> {
        const url = buildApiUrl(inventoryApiUrl.DELETE_REGISTERED_LABOR, id);
        return this.delete(url);
    }
}