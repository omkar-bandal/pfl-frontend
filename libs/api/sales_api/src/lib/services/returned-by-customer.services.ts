import { ApiBaseState, BaseService, ResultModel } from "@prime-fresh/common_api";
import { salesApiUrl } from "../constants/sales-api-url";
import { GetReturnByCustomer, PostReturnByCustomer } from "../models";

export class ReturnedByCustomerServices extends BaseService {
    private static _instance: ReturnedByCustomerServices;

    public static getInstance(): ReturnedByCustomerServices {
        return this._instance || (this._instance = new this());
    }

    createReturnedByCustomer(data: PostReturnByCustomer): Promise<ResultModel> {
        const url = salesApiUrl.CREATE_RBC;
        return this.post(url, data);
    }

    getAllReturnedByCustomers(): Promise<ApiBaseState<GetReturnByCustomer[]>> {
        const url = salesApiUrl.GET_ALL_RBC;
        return this.get(url);
    }

    getReturnedByCustomerById(id: string): Promise<ApiBaseState<GetReturnByCustomer>> {
        const url = `${salesApiUrl.GET_RBC_BY_ID}/${id}`;
        return this.get(url);
    }

    updateReturnedByCustomer(id: string, data: GetReturnByCustomer): Promise<ResultModel> {
        const url = `${salesApiUrl.UPDATE_RBC}/${id}`;
        return this.patch(url, data);
    }

    deleteReturnedByCustomerById(id: string): Promise<ResultModel> {
        const url = `${salesApiUrl.DELETE_RBC}/${id}`;
        return this.delete(url);
    }
}