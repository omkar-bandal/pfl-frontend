import { IInwardRegister } from "../models";
import { apiUrls } from "../constants";
import { buildApiUrl } from '../../base';
import { QueryParams } from '../../shared';
import { ApiBaseState, BaseService, ResultModel } from '../../base';

export class InwardRegisterServices extends BaseService {
    private static _instance: InwardRegisterServices;

    public static getInstance(): InwardRegisterServices {
        return this._instance || (this._instance = new this());
    }

    createInwardRegister(data: IInwardRegister): Promise<ResultModel> {
        const url = apiUrls.CREATE_INWARD_REGISTER;
        return this.post(url, data);
    }

    getAllInwardRegisters(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<IInwardRegister[]>> {
        const url = buildApiUrl(apiUrls.GET_ALL_INWARD_REGISTERS, null, queryParams, search);
        return this.get(url);
    }

    getInwardRegisterForViewById(id: string): Promise<ApiBaseState<IInwardRegister>> {
        const url = buildApiUrl(apiUrls.GET_INWARD_REGISTER_FOR_VIEW_BY_ID, id);
        return this.get(url);
    }

    getInwardRegisterForUpdateById(id: string): Promise<ApiBaseState<IInwardRegister>> {
        const url = buildApiUrl(apiUrls.GET_INWARD_REGISTER_FOR_UPDATE_BY_ID, id);
        return this.get(url);
    }

    updateInwardRegister(id: string, data: IInwardRegister): Promise<ResultModel> {
        const url = buildApiUrl(apiUrls.UPDATE_INWARD_REGISTER, id);
        return this.patch(url, data);
    }

    deleteInwardRegisterById(id: string): Promise<ResultModel> {
        const url = buildApiUrl(apiUrls.DELETE_INWARD_REGISTER, id);
        return this.delete(url);
    }
}