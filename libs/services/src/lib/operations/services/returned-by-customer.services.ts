import { apiUrls } from "../constants";
import { IReturnByCustomer } from "../models";
import { QueryParams } from '../../shared';
import { ApiBaseState, BaseService, ResultModel, buildApiUrl } from '../../base';

export class ReturnedByCustomerServices extends BaseService {
    private static _instance: ReturnedByCustomerServices;

    public static getInstance(): ReturnedByCustomerServices {
        return this._instance || (this._instance = new this());
    }

    createReturnedByCustomer(data: Omit<IReturnByCustomer, 'id'>): Promise<ResultModel> {
        const url = apiUrls.CREATE_RBC;
        return this.post(url, data);
    }

    getAllReturnedByCustomers(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<IReturnByCustomer[]>> {
        const url = buildApiUrl(apiUrls.GET_ALL_RBC, null, queryParams, search);
        return this.get(url);
    }

    getReturnedByCustomerById(id: string): Promise<ApiBaseState<IReturnByCustomer>> {
        const url = buildApiUrl(apiUrls.GET_RBC_BY_ID, id);
        return this.get(url);
    }

    getReturnedByCustomerForViewById(id: string): Promise<ApiBaseState<IReturnByCustomer>> {
        const url = buildApiUrl(apiUrls.GET_RBC_FOR_VIEW_BY_ID, id);
        return this.get(url);
    }

    getReturnedByCustomerForUpdateById(id: string): Promise<ApiBaseState<IReturnByCustomer>> {
        const url = buildApiUrl(apiUrls.GET_RBC_FOR_UPDATE_BY_ID, id);
        return this.get(url);
    }

    updateReturnedByCustomer(id: string, data: IReturnByCustomer): Promise<ResultModel> {
        const url = buildApiUrl(apiUrls.UPDATE_RBC, id);
        return this.patch(url, data);
    }

    deleteReturnedByCustomerById(id: string): Promise<ResultModel> {
        const url = buildApiUrl(apiUrls.DELETE_RBC, id);
        return this.delete(url);
    }
}