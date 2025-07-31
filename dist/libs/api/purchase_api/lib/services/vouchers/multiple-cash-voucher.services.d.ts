import { IMultiCashVoucher } from '../../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class MultiCashVoucherServices extends BaseService {
    private static _instance;
    static getInstance(): MultiCashVoucherServices;
    createMultiCashVoucher(data: FormData): Promise<ResultModel>;
    getAllMultiCashVouchers(queryParams?: QueryParams): Promise<ApiBaseState<IMultiCashVoucher[]>>;
    getMultiCashVoucherForViewById(id: string): Promise<ApiBaseState<IMultiCashVoucher>>;
    getMultiCashVoucherForUpdateById(id: string): Promise<ApiBaseState<IMultiCashVoucher>>;
    updateMultiCashVoucher(id: string, data: FormData): Promise<ResultModel>;
    deleteMultiCashVoucherById(id: string): Promise<ResultModel>;
}
