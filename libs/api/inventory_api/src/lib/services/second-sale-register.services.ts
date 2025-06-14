import { ApiBaseState, BaseService, QueryParams, ResultModel } from "@prime-fresh/common_api";
import { GetSecondSaleRegister, PostSecondSaleRegister } from "../models";
import { inventoryApiUrl } from "../constants";

export class SecondSaleRegisterServices extends BaseService {
    private static _instance: SecondSaleRegisterServices;

    public static getInstance(): SecondSaleRegisterServices {
        return this._instance || (this._instance = new this());
    }

    createSecondSaleRegister(data: PostSecondSaleRegister): Promise<ResultModel> {
        const url = inventoryApiUrl.CREATE_SECOND_SALE_REGISTER;
        return this.post(url, data);
    }

    getAllSecondSaleRegisters(queryParams?: QueryParams):Promise<ApiBaseState<GetSecondSaleRegister[]>> {
        const url = inventoryApiUrl.GET_ALL_SECOND_SALE_REGISTERS(queryParams);
        return this.get(url);
    }

    getSecondSaleRegisterById(id: string): Promise<ApiBaseState<GetSecondSaleRegister>> {
        const url = `${inventoryApiUrl.GET_SECOND_SALE_REGISTER_BY_ID}/${id}`;
        return this.get(url);
    }

    updateSecondSaleRegister(id: string, data: GetSecondSaleRegister): Promise<ResultModel> {
        const url = `${inventoryApiUrl.UPDATE_SECOND_SALE_REGISTER}/${id}`;
        return this.patch(url, data);
    }

    deleteSecondSaleRegisterById(id: string): Promise<ResultModel> {
        const url = `${inventoryApiUrl.DELETE_SECOND_SALE_REGISTER}/${id}`;
        return this.delete(url);
    }
}