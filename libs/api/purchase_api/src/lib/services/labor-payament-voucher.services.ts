import { ApiBaseState, BaseService, ResultModel } from "@prime-fresh/common_api";
import { purchaseApiUrl } from "../constants";
import { GetLPvoucher } from "../models";

export class LaborPaymentVoucherServices extends BaseService {
    private static _instance: LaborPaymentVoucherServices;

    public static getInstance(): LaborPaymentVoucherServices {
        return this._instance || (this._instance = new this());
    }

    createLaborPaymentVoucher(data: FormData): Promise<ResultModel> {
        const url = purchaseApiUrl.CREATE_LP_VOUCHER;
        return this.postFormData(url, data);
    }

    getAllLaborPaymentVouchers(): Promise<ApiBaseState<GetLPvoucher[]>> {
        const url = purchaseApiUrl.GET_ALL_LP_VOUCHER;
        return this.get(url);
    }

    GetLaborPaymentVoucherById(id: string): Promise<ApiBaseState<GetLPvoucher>> {
        const url = `${purchaseApiUrl.GET_LP_VOUCHER_BY_ID}/${id}`;
        return this.get(url);
    }

    updateLaborPaymentVoucher(id: string, data: FormData): Promise<ResultModel> {
        const url = `${purchaseApiUrl.UPDATE_LP_VOUCHER}/${id}`;
        return this.patchFormData(url, data);
    }

    deleteLaborPaymentVoucherById(id: string): Promise<ResultModel> {
        const url = `${purchaseApiUrl.DELETE_LP_VOUCHER}/${id}`;
        return this.delete(url);
    }
}