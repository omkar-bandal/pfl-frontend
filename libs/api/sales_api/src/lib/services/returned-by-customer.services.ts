import { ApiBaseState, BaseService, QueryParams, ResultModel } from "@prime-fresh/common_api";
import { salesApiUrl } from "../constants/sales-api-url";
import { IReturnByCustomer } from "../models";
export class ReturnedByCustomerServices extends BaseService {
    private static _instance: ReturnedByCustomerServices;

    public static getInstance(): ReturnedByCustomerServices {
        return this._instance || (this._instance = new this());
    }

    createReturnedByCustomer(data: Omit<IReturnByCustomer, 'id'>): Promise<ResultModel> {
        const url = salesApiUrl.CREATE_RBC;
        return this.post(url, data);
    }

    getAllReturnedByCustomers(queryParams?: QueryParams): Promise<ApiBaseState<IReturnByCustomer[]>> {
        const url = salesApiUrl.GET_ALL_RBC(queryParams);
        return this.get(url);
    }

    getReturnedByCustomerById(id: string): Promise<ApiBaseState<IReturnByCustomer>> {
        const url = salesApiUrl.GET_RBC_BY_ID(id);
        return this.get(url);
    }

    updateReturnedByCustomer(id: string, data: IReturnByCustomer): Promise<ResultModel> {
        const url = salesApiUrl.UPDATE_RBC(id);
        return this.patch(url, data);
    }

    deleteReturnedByCustomerById(id: string): Promise<ResultModel> {
        const url = salesApiUrl.DELETE_RBC(id);
        return this.delete(url);
    }
}