import { ApiBaseState, BaseService, QueryParams, ResultModel } from "@prime-fresh/common_api";
import { IRFPA } from "../models";
import { purchaseApiUrl } from "../constants";
import { buildApiUrl } from "@prime-fresh/shared/modules";
export class RFPAServices extends BaseService {
    private static _instance: RFPAServices;

    public static getInstance(): RFPAServices {
        return this._instance || (this._instance = new this());
    }

    createRFPA(data: IRFPA): Promise<ResultModel> {
        const url = purchaseApiUrl.CREATE_RFPA;
        return this.post(url, data);
    }

    getAllRFPAs(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<IRFPA[]>> {
        const url = buildApiUrl(purchaseApiUrl.GET_ALL_RFPA, null, queryParams, search);
        return this.get(url);
    }

    getRFPAForViewById(id: string): Promise<ApiBaseState<IRFPA>> {
        const url = purchaseApiUrl.GET_RFPA_FOR_VIEW_BY_ID(id);
        return this.get(url);
    }

    getRFPAForUpdateById(id: string): Promise<ApiBaseState<IRFPA>> {
        const url = purchaseApiUrl.GET_RFPA_FOR_UPDATE_BY_ID(id);
        return this.get(url);
    }

    updateRFPA(id: string, data: IRFPA): Promise<ResultModel> {
        const url = purchaseApiUrl.UPDATE_RFPA(id);
        return this.patch(url, data);
    }

    deleteRFPAById(id: string): Promise<ResultModel> {
        const url = purchaseApiUrl.DELETE_RFPA(id);
        return this.delete(url);
    }

    deleteMultipleRFPAs(data: Array<string>): Promise<ResultModel> {
        const url = purchaseApiUrl.DELETE_MULTIPLE_RFPA;
        return this.deleteMultiple(url, data);
    }
}