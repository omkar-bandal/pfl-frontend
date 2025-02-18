import { ApiBaseState, BaseService, ResultModel } from "@prime-fresh/common_api";
import { GetDealSlip, PostDealSlip } from "../models";
import { purchaseApiUrl } from "../constants";

export class DealSlipServices extends BaseService {
    private static _instance: DealSlipServices;

    public static getInstance(): DealSlipServices {
        return this._instance || (this._instance = new this());
    }

    createDealSlip(data: PostDealSlip): Promise<ResultModel> {
        const url = purchaseApiUrl.CREATE_DEAL_SLIP;
        return this.post(url, data);
    }

    getAllDealSlips():Promise<ApiBaseState<GetDealSlip[]>> {
        const url = purchaseApiUrl.GET_ALL_DEAL_SLIP;
        return this.get(url);
    }

    getDealSlipById(id: string): Promise<ApiBaseState<GetDealSlip>> {
        const url = `${purchaseApiUrl.GET_DEAL_SLIP_BY_ID}/${id}`;
        return this.get(url);
    }

    updateDealSlip(id: string, data: GetDealSlip): Promise<ResultModel> {
        const url = `${purchaseApiUrl.UPDATE_DEAL_SLIP}/${id}`;
        return this.patch(url, data);
    }

    deleteDealSlipById(id: string): Promise<ResultModel> {
        const url = `${purchaseApiUrl.DELETE_DEAL_SLIP}/${id}`;
        return this.delete(url);
    }
}