import { apiUrls } from "../../constants";
import { ITranportPaymentVoucher } from "../../models";
import { QueryParams } from '../../../shared';
import { ApiBaseState, BaseService, ResultModel, buildApiUrl } from '../../../base';

export class TransportPaymentVoucherServices extends BaseService {
    private static _instance: TransportPaymentVoucherServices;

    public static getInstance(): TransportPaymentVoucherServices {
        return this._instance || (this._instance = new this());
    }

    createTransportPaymentVoucher(data: FormData): Promise<ResultModel> {
        const url = apiUrls.CREATE_TP_VOUCHER;
        return this.postFormData(url, data);
    }

    getAllTransportPaymentVouchers(queryParams? : QueryParams, search?: string | null): Promise<ApiBaseState<ITranportPaymentVoucher[]>> {
        const url = buildApiUrl(apiUrls.GET_ALL_TP_VOUCHER, null, queryParams, search);
        return this.get(url);
    }

    getTransportPaymentVoucherById(id: string): Promise<ApiBaseState<ITranportPaymentVoucher>> {
        const url = `${apiUrls.GET_TP_VOUCHER_BY_ID}/${id}`;
        return this.get(url);
    }

    getTransportPaymentVoucherForViewById(id: string): Promise<ApiBaseState<ITranportPaymentVoucher>> {
        const url = apiUrls.GET_TP_VOUCHER_FOR_VIEW_BY_ID(id);
        return this.get(url);
    }

    getTransportPaymentVoucherForUpdateById(id: string): Promise<ApiBaseState<ITranportPaymentVoucher>> {
        const url = apiUrls.GET_TP_VOUCHER_FOR_UPDATE_BY_ID(id);
        return this.get(url);
    }

    updateTransportPaymentVoucher(id: string, data: FormData): Promise<ResultModel> {
        const url = apiUrls.UPDATE_TP_VOUCHER(id);
        return this.patchFormData(url, data);
    }

    deleteTransportPaymentVoucherById(id: string): Promise<ResultModel> {
        const url = apiUrls.DELETE_TP_VOUCHER(id);
        return this.delete(url);
    }

    deleteMultipleTransportPaymentVouchers(data: Array<string>): Promise<ResultModel> {
        const url = apiUrls.DELETE_MULTIPLE_TP_VOUCHER;
        return this.deleteMultiple(url, data);
    }
}