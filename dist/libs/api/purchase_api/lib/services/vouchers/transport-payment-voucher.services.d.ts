import { ITranportPaymentVoucher } from '../../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class TransportPaymentVoucherServices extends BaseService {
    private static _instance;
    static getInstance(): TransportPaymentVoucherServices;
    createTransportPaymentVoucher(data: FormData): Promise<ResultModel>;
    getAllTransportPaymentVouchers(queryParams?: QueryParams): Promise<ApiBaseState<ITranportPaymentVoucher[]>>;
    getTransportPaymentVoucherById(id: string): Promise<ApiBaseState<ITranportPaymentVoucher>>;
    getTransportPaymentVoucherForViewById(id: string): Promise<ApiBaseState<ITranportPaymentVoucher>>;
    getTransportPaymentVoucherForUpdateById(id: string): Promise<ApiBaseState<ITranportPaymentVoucher>>;
    updateTransportPaymentVoucher(id: string, data: FormData): Promise<ResultModel>;
    deleteTransportPaymentVoucherById(id: string): Promise<ResultModel>;
}
