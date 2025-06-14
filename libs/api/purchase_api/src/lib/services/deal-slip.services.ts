import { ApiBaseState, BaseService, QueryParams, ResultModel } from "@prime-fresh/common_api";
import { IDealSlip } from "../models";
import { purchaseApiUrl } from "../constants";

export class DealSlipServices extends BaseService {
    private static _instance: DealSlipServices;

    public static getInstance(): DealSlipServices {
        return this._instance || (this._instance = new this());
    }

    createDealSlip(data: IDealSlip): Promise<ResultModel> {
        const url = purchaseApiUrl.CREATE_DEAL_SLIP;
        return this.post(url, data);
    }

    getAllDealSlips(queryParams?: QueryParams):Promise<ApiBaseState<IDealSlip[]>> {
        const url = purchaseApiUrl.GET_ALL_DEAL_SLIP(queryParams);
        return this.get(url);
    }

    getDealSlipForViewById(id: string): Promise<ApiBaseState<IDealSlip>> {
        const url = purchaseApiUrl.GET_DEAL_SLIP_FOR_VIEW_BY_ID(id);
        return this.get(url);
    }

    getDealSlipForUpdateById(id: string): Promise<ApiBaseState<IDealSlip>> {
        const url = purchaseApiUrl.GET_DEAL_SLIP_FOR_UPDATE_BY_ID(id);
        return this.get(url);
    }

    updateDealSlip(id: string, data: IDealSlip): Promise<ResultModel> {
        const url = purchaseApiUrl.UPDATE_DEAL_SLIP(id);
        return this.patch(url, data);
    }

    deleteDealSlipById(id: string): Promise<ResultModel> {
        const url = purchaseApiUrl.DELETE_DEAL_SLIP(id);
        return this.delete(url);
    }
}