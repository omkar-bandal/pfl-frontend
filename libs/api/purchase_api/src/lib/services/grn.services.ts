import { ApiBaseState, BaseService, ResultModel } from "@prime-fresh/common_api";
import { purchaseApiUrl } from "../constants";
import { GetGRN } from "../models";

export class GRNServices extends BaseService {
    private static _instance: GRNServices;

    public static getInstance(): GRNServices {
        return this._instance || (this._instance = new this());
    }

    createGRN(data: FormData): Promise<ResultModel> {
        const url = purchaseApiUrl.CREATE_GRN;
        return this.postFormData(url, data);
    }

    getAllGRNs(): Promise<ApiBaseState<GetGRN[]>> {
        const url = purchaseApiUrl.GET_ALL_GRN;
        return this.get(url);
    }

    getGRNById(id: string): Promise<ApiBaseState<GetGRN>> {
        const url = `${purchaseApiUrl.GET_GRN_BY_ID}/${id}`;
        return this.get(url);
    }

    updateGRN(id: string, data: FormData): Promise<ResultModel> {
        const url = `${purchaseApiUrl.UPDATE_GRN}/${id}`;
        return this.patchFormData(url, data);
    }

    deleteGRNById(id: string): Promise<ResultModel> {
        const url = `${purchaseApiUrl.DELETE_GRN}/${id}`;
        return this.delete(url);
    }
}