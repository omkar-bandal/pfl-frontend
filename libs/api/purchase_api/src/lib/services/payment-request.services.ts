import { ApiBaseState, BaseService, ResultModel } from "@prime-fresh/common_api";
import { purchaseApiUrl } from "../constants";
import { GetPaymentRequest, PostPaymentRequest } from "../models";

export class PaymentRequestServices extends BaseService {
    private static _instance: PaymentRequestServices;

    public static getInstance(): PaymentRequestServices {
        return this._instance || (this._instance = new this());
    }

    createPaymentRequest(grnid: string, data: PostPaymentRequest): Promise<ResultModel> {
        const url = `${purchaseApiUrl.CREATE_PAYMENT_REQ}/${grnid}`;
        return this.post(url, data);
    }

    getAllPaymentRequests(): Promise<ApiBaseState<GetPaymentRequest[]>> {
        const url = purchaseApiUrl.GET_ALL_PAYMENT_REQ;
        return this.get(url);
    }

    getPaymentRequestById(id: string): Promise<ApiBaseState<GetPaymentRequest>> {
        const url = `${purchaseApiUrl.GET_PAYMENT_REQ_BY_ID}/${id}`;
        return this.get(url);
    }

    updatePaymentRequest(id: string, data: GetPaymentRequest): Promise<ResultModel> {
        const url = `${purchaseApiUrl.UPDATE_PAYMENT_REQ}/${id}`;
        return this.patchFormData(url, data);
    }

    deletePaymentRequestById(id: string): Promise<ResultModel> {
        const url = `${purchaseApiUrl.DELETE_PAYMENT_REQ}/${id}`;
        return this.delete(url);
    }
}