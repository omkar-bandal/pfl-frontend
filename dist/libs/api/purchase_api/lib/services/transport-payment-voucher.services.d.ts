import { GetTPvoucher } from '../models';
import { ApiBaseState, BaseService, ResultModel } from '../../../../common_api/src/index.ts';

export declare class TransportPaymentVoucherServices extends BaseService {
    private static _instance;
    static getInstance(): TransportPaymentVoucherServices;
    createTransportPaymentVoucher(data: FormData): Promise<ResultModel>;
    getAllTransportPaymentVouchers(): Promise<ApiBaseState<GetTPvoucher[]>>;
    GetTransportPaymentVoucherById(id: string): Promise<ApiBaseState<GetTPvoucher>>;
    updateTransportPaymentVoucher(id: string, data: FormData): Promise<ResultModel>;
    deleteTransportPaymentVoucherById(id: string): Promise<ResultModel>;
}
