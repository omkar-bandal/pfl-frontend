import { GetPaymentRequest, PostPaymentRequest } from '../models';
import { ApiBaseState, BaseService, ResultModel } from '../../../../common_api/src/index.ts';

export declare class PaymentRequestServices extends BaseService {
    private static _instance;
    static getInstance(): PaymentRequestServices;
    createPaymentRequest(grnid: string, data: PostPaymentRequest): Promise<ResultModel>;
    getAllPaymentRequests(): Promise<ApiBaseState<GetPaymentRequest[]>>;
    getPaymentRequestById(id: string): Promise<ApiBaseState<GetPaymentRequest>>;
    updatePaymentRequest(id: string, data: GetPaymentRequest): Promise<ResultModel>;
    deletePaymentRequestById(id: string): Promise<ResultModel>;
}
