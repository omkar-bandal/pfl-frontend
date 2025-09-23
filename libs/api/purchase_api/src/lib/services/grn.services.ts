import { ApiBaseState, ApprovalRequest, BaseService, QueryParams, ResultModel, buildApiUrl } from "@prime-fresh/common_api";
import { purchaseApiUrl } from "../constants";
import { IGRN } from "../models";

export class GRNServices extends BaseService {
    private static _instance: GRNServices;

    public static getInstance(): GRNServices {
        return this._instance || (this._instance = new this());
    }

    createGRN(data: FormData): Promise<ResultModel> {
        const url = purchaseApiUrl.CREATE_GRN;
        return this.postFormData(url, data);
    }

    getAllGRNs(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<IGRN[]>> {
        const url = buildApiUrl(purchaseApiUrl.GET_ALL_GRN, null, queryParams, search);
        console.log('Get all GRNs url:', url);
        return this.get(url);
    }

    getGRNForViewById(id: string): Promise<ApiBaseState<IGRN>> {
        const url = purchaseApiUrl.GET_GRN_FOR_VIEW_BY_ID(id);
        return this.get(url);
    }

    getGRNForUpdateById(id: string): Promise<ApiBaseState<IGRN>> {
        const url = purchaseApiUrl.GET_GRN_FOR_UPDATE_BY_ID(id);
        return this.get(url);
    }

    updateGRN(id: string, data: FormData): Promise<ResultModel> {
        const url = purchaseApiUrl.UPDATE_GRN(id);
        return this.patchFormData(url, data);
    }

    deleteGRNById(id: string): Promise<ResultModel> {
        const url = purchaseApiUrl.DELETE_GRN(id);
        return this.delete(url);
    }

    deleteMultipleGRNs(data: Array<string>): Promise<ResultModel> {
        const url = purchaseApiUrl.DELETE_MULTIPLE_GRN;
        return this.deleteMultiple(url, data);
    }

    approveGRN(id: string, data: ApprovalRequest): Promise<ResultModel> {
        const url = purchaseApiUrl.APPROVE_GRN(id);
        return this.patch(url, data);
    }
}