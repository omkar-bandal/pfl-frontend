import { ApiBaseState, BaseService, ResultModel } from "@prime-fresh/common_api";
import { GetDumpRegister, PostDumpRegister } from "../models";
import { inventoryApiUrl } from "../constants";

export class DumpRegisterServices extends BaseService {
    private static _instance: DumpRegisterServices;

    public static getInstance(): DumpRegisterServices {
        return this._instance || (this._instance = new this());
    }

    createDumpRegister(data: PostDumpRegister): Promise<ResultModel> {
        const url = inventoryApiUrl.CREATE_DUMP_REGISTER;
        return this.post(url, data);
    }

    getAllDumpRegisters():Promise<ApiBaseState<GetDumpRegister[]>> {
        const url = inventoryApiUrl.GET_ALL_DUMP_REGISTERS;
        return this.get(url);
    }

    getDumpRegisterById(id: string): Promise<ApiBaseState<GetDumpRegister>> {
        const url = `${inventoryApiUrl.GET_DUMP_REGISTER_BY_ID}/${id}`;
        return this.get(url);
    }

    updateDumpRegister(id: string, data: GetDumpRegister): Promise<ResultModel> {
        const url = `${inventoryApiUrl.UPDATE_DUMP_REGISTER}/${id}`;
        return this.patch(url, data);
    }

    deleteDumpRegisterById(id: string): Promise<ResultModel> {
        const url = `${inventoryApiUrl.DELETE_DUMP_REGISTER}/${id}`;
        return this.delete(url);
    }
}