import { ApiBaseState, BaseService, ResultModel } from "@prime-fresh/common_api";
import { GetRFPA, PostRFPA } from "../models";
import { purchaseApiUrl } from "../constants";

export class RFPAServices extends BaseService {
    private static _instance: RFPAServices;

    public static getInstance(): RFPAServices {
        return this._instance || (this._instance = new this());
    }

    createRFPA(data: PostRFPA): Promise<ResultModel> {
        const url = purchaseApiUrl.CREATE_RFPA;
        return this.post(url, data);
    }

    getAllRFPAs():Promise<ApiBaseState<GetRFPA[]>> {
        const url = purchaseApiUrl.GET_ALL_RFPA;
        return this.get(url);
    }

    getRFPAById(id: string): Promise<ApiBaseState<GetRFPA>> {
        const url = `${purchaseApiUrl.GET_RFPA_BY_ID}/${id}`;
        return this.get(url);
    }

    updateRFPA(id: string, data: GetRFPA): Promise<ResultModel> {
        const url = `${purchaseApiUrl.UPDATE_RFPA}/${id}`;
        return this.patch(url, data);
    }

    deleteRFPAById(id: string): Promise<ResultModel> {
        const url = `${purchaseApiUrl.DELETE_RFPA}/${id}`;
        return this.delete(url);
    }
}