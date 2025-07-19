import { ApiBaseState, BaseService, QueryParams, ResultModel } from "@prime-fresh/common_api";
import { IDumpRegister } from "../models";
import { inventoryApiUrl } from "../constants";

export class DumpRegisterServices extends BaseService {
    private static _instance: DumpRegisterServices;

    public static getInstance(): DumpRegisterServices {
        return this._instance || (this._instance = new this());
    }

    createDumpRegister(data: IDumpRegister): Promise<ResultModel> {
        const url = inventoryApiUrl.CREATE_DUMP_REGISTER;
        return this.post(url, data);
    }

    getAllDumpRegisters(queryParams?: QueryParams):Promise<ApiBaseState<IDumpRegister[]>> {
        const url = inventoryApiUrl.GET_ALL_DUMP_REGISTERS(queryParams);
        return this.get(url);
    }

    getDumpRegisterForViewById(id: string): Promise<ApiBaseState<IDumpRegister>> {
        const url = inventoryApiUrl.GET_DUMP_REGISTER_FOR_VIEW_BY_ID(id);
        return this.get(url);
    }
    getDumpRegisterForUpdateById(id: string): Promise<ApiBaseState<IDumpRegister>> {
        const url = inventoryApiUrl.GET_DUMP_REGISTER_FOR_UPDATE_BY_ID(id);
        return this.get(url);
    }

    updateDumpRegister(id: string, data: IDumpRegister): Promise<ResultModel> {
        const url = inventoryApiUrl.UPDATE_DUMP_REGISTER(id);
        return this.patch(url, data);
    }

    deleteDumpRegisterById(id: string): Promise<ResultModel> {
        const url = inventoryApiUrl.DELETE_DUMP_REGISTER(id);
        return this.delete(url);
    }
}