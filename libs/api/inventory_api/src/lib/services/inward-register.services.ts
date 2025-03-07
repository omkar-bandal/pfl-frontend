import { ApiBaseState, BaseService, ResultModel } from "@prime-fresh/common_api";
import { GetInwardRegister, PostInwardRegister } from "../models";
import { inventoryApiUrl } from "../constants";

export class InwardRegisterServices extends BaseService {
    private static _instance: InwardRegisterServices;

    public static getInstance(): InwardRegisterServices {
        return this._instance || (this._instance = new this());
    }

    createInwardRegister(data: PostInwardRegister): Promise<ResultModel> {
        const url = inventoryApiUrl.CREATE_INWARD_REGISTER;
        return this.post(url, data);
    }

    getAllInwardRegisters():Promise<ApiBaseState<GetInwardRegister[]>> {
        const url = inventoryApiUrl.GET_ALL_INWARD_REGISTERS;
        return this.get(url);
    }

    getInwardRegisterById(id: string): Promise<ApiBaseState<GetInwardRegister>> {
        const url = `${inventoryApiUrl.GET_INWARD_REGISTER_BY_ID}/${id}`;
        return this.get(url);
    }

    updateInwardRegister(id: string, data: GetInwardRegister): Promise<ResultModel> {
        const url = `${inventoryApiUrl.UPDATE_INWARD_REGISTER}/${id}`;
        return this.patch(url, data);
    }

    deleteInwardRegisterById(id: string): Promise<ResultModel> {
        const url = `${inventoryApiUrl.DELETE_INWARD_REGISTER}/${id}`;
        return this.delete(url);
    }
}