import { ApiBaseState, BaseService, QueryParams, ResultModel } from "@prime-fresh/common_api";
import { adminApiUrlConstants } from "../../constants";
import { GetCustomerType, PostCustomerType } from "../../models";

export class CustomerTypeService extends BaseService {
    private static _instance: CustomerTypeService;

    public static getInstance(): CustomerTypeService {
        return this._instance || (this._instance = new this());
    }

    createCustomerType(data: PostCustomerType): Promise<ResultModel> {
        const url = adminApiUrlConstants.CREATE_CUSTOMER_TYPE;
        return this.post(url, data);
    }

    getAllCustomerCategories(queryParams?: QueryParams):Promise<ApiBaseState<GetCustomerType[]>> {
        const url = adminApiUrlConstants.GET_ALL_CUSTOMER_TYPE(queryParams);
        return this.get(url);
    }

    getCustomerTypeById(id: string): Promise<ApiBaseState<GetCustomerType>> {
        const url = `${adminApiUrlConstants.GET_A_CUSTOMER_TYPE}/${id}`;
        return this.get(url);
    }

    updateCustomerType(id: string, data: GetCustomerType): Promise<ResultModel> {
        const url = `${adminApiUrlConstants.UPDATE_CUSTOMER_TYPE}/${id}`;
        return this.patch(url, data);
    }

    deleteCustomerTypeById(id: string): Promise<ResultModel> {
        const url = `${adminApiUrlConstants.DELETE_CUSTOMER_TYPE}/${id}`;
        return this.delete(url);
    }
}