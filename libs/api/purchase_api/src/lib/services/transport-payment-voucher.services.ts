import { ApiBaseState, BaseService, QueryParams, ResultModel } from "@prime-fresh/common_api";
import { purchaseApiUrl } from "../constants";
import { ITranportPaymentVoucher } from "../models";

export class TransportPaymentVoucherServices extends BaseService {
    private static _instance: TransportPaymentVoucherServices;

    public static getInstance(): TransportPaymentVoucherServices {
        return this._instance || (this._instance = new this());
    }

    createTransportPaymentVoucher(data: FormData): Promise<ResultModel> {
        const url = purchaseApiUrl.CREATE_TP_VOUCHER;
        return this.postFormData(url, data);
    }

    getAllTransportPaymentVouchers(queryParams? : QueryParams): Promise<ApiBaseState<ITranportPaymentVoucher[]>> {
        const url = purchaseApiUrl.GET_ALL_TP_VOUCHER(queryParams);
        return this.get(url);
    }

    getTransportPaymentVoucherById(id: string): Promise<ApiBaseState<ITranportPaymentVoucher>> {
        const url = `${purchaseApiUrl.GET_TP_VOUCHER_BY_ID}/${id}`;
        return this.get(url);
    }

    getTransportPaymentVoucherForViewById(id: string): Promise<ApiBaseState<ITranportPaymentVoucher>> {
        const url = purchaseApiUrl.GET_TP_VOUCHER_FOR_VIEW_BY_ID(id);
        return this.get(url);
    }

    getTransportPaymentVoucherForUpdateById(id: string): Promise<ApiBaseState<ITranportPaymentVoucher>> {
        const url = purchaseApiUrl.GET_TP_VOUCHER_FOR_UPDATE_BY_ID(id);
        return this.get(url);
    }

    updateTransportPaymentVoucher(id: string, data: FormData): Promise<ResultModel> {
        const url = purchaseApiUrl.UPDATE_TP_VOUCHER(id);
        return this.patchFormData(url, data);
    }

    deleteTransportPaymentVoucherById(id: string): Promise<ResultModel> {
        const url = purchaseApiUrl.DELETE_TP_VOUCHER(id);
        return this.delete(url);
    }
}