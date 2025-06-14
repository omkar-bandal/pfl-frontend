import { ApiBaseState, BaseService, QueryParams, ResultModel } from "@prime-fresh/common_api";
import { IInwardRegister } from "../models";
import { inventoryApiUrl } from "../constants";

export class InwardRegisterServices extends BaseService {
    private static _instance: InwardRegisterServices;

    public static getInstance(): InwardRegisterServices {
        return this._instance || (this._instance = new this());
    }

    createInwardRegister(data: IInwardRegister): Promise<ResultModel> {
        const url = inventoryApiUrl.CREATE_INWARD_REGISTER;
        return this.post(url, data);
    }

    getAllInwardRegisters(queryParams?: QueryParams):Promise<ApiBaseState<IInwardRegister[]>> {
        const url = inventoryApiUrl.GET_ALL_INWARD_REGISTERS(queryParams);
        return this.get(url);
    }

    getInwardRegisterForViewById(id: string): Promise<ApiBaseState<IInwardRegister>> {
        const url = `${inventoryApiUrl.GET_INWARD_REGISTER_FOR_VIEW_BY_ID}/${id}`;
        return this.get(url);
    }

    getInwardRegisterForUpdateById(id: string): Promise<ApiBaseState<IInwardRegister>> {
        const url = `${inventoryApiUrl.GET_INWARD_REGISTER_FOR_UPDATE_BY_ID}/${id}`;
        return this.get(url);
    }

    updateInwardRegister(id: string, data: IInwardRegister): Promise<ResultModel> {
        const url = `${inventoryApiUrl.UPDATE_INWARD_REGISTER}/${id}`;
        return this.patch(url, data);
    }

    deleteInwardRegisterById(id: string): Promise<ResultModel> {
        const url = `${inventoryApiUrl.DELETE_INWARD_REGISTER}/${id}`;
        return this.delete(url);
    }
}