import { ILaborRegistration } from "../models";
import { apiUrls } from "../constants";
import { QueryParams } from '../../shared';
import { ApiBaseState, BaseService, ResultModel, buildApiUrl } from '../../base';

export class LaborRegistrationServices extends BaseService {
    private static _instance: LaborRegistrationServices;

    public static getInstance(): LaborRegistrationServices {
        return this._instance || (this._instance = new this());
    }

    createLaborRegistration(data: Omit<ILaborRegistration, 'id'>): Promise<ResultModel> {
        const url = apiUrls.CREATE_LABOR_REGISTRATION;
        return this.post(url, data);
    }

    getAllRegistreredLabors(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<ILaborRegistration[]>> {
        const url = buildApiUrl(apiUrls.GET_ALL_REGISTERED_LABORS, null, queryParams, search);
        return this.get(url);
    }

    getRegistreredLaborById(id: string): Promise<ApiBaseState<ILaborRegistration>> {
        const url = buildApiUrl(apiUrls.GET_REGISTERED_LABOR_BY_ID, id);
        return this.get(url);
    }

    updateRegistreredLabor(id: string, data: ILaborRegistration): Promise<ResultModel> {
        const url = buildApiUrl(apiUrls.UPDATE_REGISTERED_LABOR, id);
        return this.patch(url, data);
    }

    deleteRegistreredLaborById(id: string): Promise<ResultModel> {
        const url = buildApiUrl(apiUrls.DELETE_REGISTERED_LABOR, id);
        return this.delete(url);
    }
}