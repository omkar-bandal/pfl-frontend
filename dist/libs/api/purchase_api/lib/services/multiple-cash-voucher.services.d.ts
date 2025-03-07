import { GetMCvoucher } from '../models';
import { ApiBaseState, BaseService, ResultModel } from '../../../../common_api/src/index.ts';

export declare class MultiCashVoucherServices extends BaseService {
    private static _instance;
    static getInstance(): MultiCashVoucherServices;
    createMultiCashVoucher(data: FormData): Promise<ResultModel>;
    getAllMultiCashVouchers(): Promise<ApiBaseState<GetMCvoucher[]>>;
    getMultiCashVoucherById(id: string): Promise<ApiBaseState<GetMCvoucher>>;
    updateMultiCashVoucher(id: string, data: FormData): Promise<ResultModel>;
    deleteMultiCashVoucherById(id: string): Promise<ResultModel>;
}
