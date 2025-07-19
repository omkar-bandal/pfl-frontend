import { ApiBaseState, BaseService, QueryParams, ResultModel } from "@prime-fresh/common_api";
import { ISecondSaleRegister } from "../models";
import { inventoryApiUrl } from "../constants";

export class SecondSaleRegisterServices extends BaseService {
    private static _instance: SecondSaleRegisterServices;

    public static getInstance(): SecondSaleRegisterServices {
        return this._instance || (this._instance = new this());
    }

    createSecondSaleRegister(data: Omit<ISecondSaleRegister, 'id'>): Promise<ResultModel> {
        const url = inventoryApiUrl.CREATE_SECOND_SALE;
        return this.post(url, data);
    }

    getAllSecondSaleRegisters(queryParams?: QueryParams): Promise<ApiBaseState<ISecondSaleRegister[]>> {
        const url = inventoryApiUrl.GET_ALL_SECOND_SALES(queryParams);
        return this.get(url);
    }

    getSecondSaleRegisterForViewById(id: string): Promise<ApiBaseState<ISecondSaleRegister>> {
        const url = inventoryApiUrl.GET_SECOND_SALE_FOR_VIEW_BY_ID(id);
        return this.get(url);
    }

    getSecondSaleRegisterForUpdateById(id: string): Promise<ApiBaseState<ISecondSaleRegister>> {
        const url = inventoryApiUrl.GET_SECOND_SALE_FOR_UPDATE_BY_ID(id);
        return this.get(url);
    }

    updateSecondSaleRegister(id: string, data: ISecondSaleRegister): Promise<ResultModel> {
        const url = inventoryApiUrl.UPDATE_SECOND_SALE(id);
        return this.patch(url, data);
    }

    deleteSecondSaleRegisterById(id: string): Promise<ResultModel> {
        const url = inventoryApiUrl.DELETE_SECOND_SALE(id);
        return this.delete(url);
    }
}