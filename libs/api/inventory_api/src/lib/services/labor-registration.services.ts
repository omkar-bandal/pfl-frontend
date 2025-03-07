import { ApiBaseState, BaseService, ResultModel } from "@prime-fresh/common_api";
import { GetLaborRegistration, PostLaborRegistration } from "../models";
import { inventoryApiUrl } from "../constants";

export class LaborRegistrationServices extends BaseService {
    private static _instance: LaborRegistrationServices;

    public static getInstance(): LaborRegistrationServices {
        return this._instance || (this._instance = new this());
    }

    createLaborRegistration(data: PostLaborRegistration): Promise<ResultModel> {
        const url = inventoryApiUrl.CREATE_LABOR_REGISTRATION;
        return this.post(url, data);
    }

    getAllRegistreredLabors(): Promise<ApiBaseState<GetLaborRegistration[]>> {
        const url = inventoryApiUrl.GET_ALL_REGISTERED_LABORS;
        return this.get(url);
    }

    getRegistreredLaborById(id: string): Promise<ApiBaseState<GetLaborRegistration>> {
        const url = `${inventoryApiUrl.GET_REGISTERED_LABOR_BY_ID}/${id}`;
        return this.get(url);
    }

    updateRegistreredLabor(id: string, data: GetLaborRegistration): Promise<ResultModel> {
        const url = `${inventoryApiUrl.UPDATE_REGISTERED_LABOR}/${id}`;
        return this.patch(url, data);
    }

    deleteRegistreredLaborById(id: string): Promise<ResultModel> {
        const url = `${inventoryApiUrl.DELETE_REGISTERED_LABOR}/${id}`;
        return this.delete(url);
    }
}