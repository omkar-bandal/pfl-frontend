import { GetLPvoucher } from '../models';
import { ApiBaseState, BaseService, ResultModel } from '../../../../common_api/src/index.ts';

export declare class LaborPaymentVoucherServices extends BaseService {
    private static _instance;
    static getInstance(): LaborPaymentVoucherServices;
    createLaborPaymentVoucher(data: FormData): Promise<ResultModel>;
    getAllLaborPaymentVouchers(): Promise<ApiBaseState<GetLPvoucher[]>>;
    GetLaborPaymentVoucherById(id: string): Promise<ApiBaseState<GetLPvoucher>>;
    updateLaborPaymentVoucher(id: string, data: FormData): Promise<ResultModel>;
    deleteLaborPaymentVoucherById(id: string): Promise<ResultModel>;
}
