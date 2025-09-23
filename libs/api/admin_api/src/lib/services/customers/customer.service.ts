import { ApiBaseState, BaseService, QueryParams, ResultModel, buildApiUrl } from "@prime-fresh/common_api";
import { GetCustomer } from "../../models";
import { adminApiUrlConstants } from "../../constants";

export class CustomersService extends BaseService {
    private static _instance: CustomersService;

    public static getInstance(): CustomersService {
        return this._instance || (this._instance = new this());
    }

    createCustomer(data: FormData): Promise<ResultModel> {
        const url = adminApiUrlConstants.CREATE_CUSTOMER;
        return this.postFormData(url, data);
    }

    getAllCustomers(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<GetCustomer[]>> {
        const url = buildApiUrl(adminApiUrlConstants.GET_ALL_CUSTOMERS, null, queryParams, search);
        return this.get(url);
    }

    getCustomerById(id: string): Promise<ApiBaseState<GetCustomer>> {
        const url = buildApiUrl(adminApiUrlConstants.GET_A_CUSTOMER, id);
        return this.get(url);
    }

    updateCustomer(id: string, data: FormData): Promise<ResultModel> {
        const url = buildApiUrl(adminApiUrlConstants.UPDATE_CUSTOMER, id);
        return this.patchFormData(url, data);
    }

    deleteCustomerById(id: string): Promise<ResultModel> {
        const url = buildApiUrl(adminApiUrlConstants.DELETE_CUSTOMER, id);
        return this.delete(url);
    }
}