import { ApiBaseState, BaseService, ResultModel } from "@prime-fresh/common_api";
import { purchaseApiUrl } from "../constants";
import { GetMCvoucher } from "../models";

export class MultiCashVoucherServices extends BaseService {
    private static _instance: MultiCashVoucherServices;

    public static getInstance(): MultiCashVoucherServices {
        return this._instance || (this._instance = new this());
    }

    createMultiCashVoucher(data: FormData): Promise<ResultModel> {
        const url = purchaseApiUrl.CREATE_MC_VOUCHER;
        return this.postFormData(url, data);
    }

    getAllMultiCashVouchers(): Promise<ApiBaseState<GetMCvoucher[]>> {
        const url = purchaseApiUrl.GET_ALL_MC_VOUCHER;
        return this.get(url);
    }

    getMultiCashVoucherById(id: string): Promise<ApiBaseState<GetMCvoucher>> {
        const url = `${purchaseApiUrl.GET_MC_VOUCHER_BY_ID}/${id}`;
        return this.get(url);
    }

    updateMultiCashVoucher(id: string, data: FormData): Promise<ResultModel> {
        const url = `${purchaseApiUrl.UPDATE_MC_VOUCHER}/${id}`;
        return this.patchFormData(url, data);
    }

    deleteMultiCashVoucherById(id: string): Promise<ResultModel> {
        const url = `${purchaseApiUrl.DELETE_MC_VOUCHER}/${id}`;
        return this.delete(url);
    }
}