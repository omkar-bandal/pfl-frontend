import { ILaborPaymentVoucher } from '../../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class LaborPaymentVoucherServices extends BaseService {
    private static _instance;
    static getInstance(): LaborPaymentVoucherServices;
    createLaborPaymentVoucher(data: FormData): Promise<ResultModel>;
    getAllLaborPaymentVouchers(queryParams?: QueryParams): Promise<ApiBaseState<ILaborPaymentVoucher[]>>;
    getLaborPaymentVoucherForViewById(id: string): Promise<ApiBaseState<ILaborPaymentVoucher>>;
    getLaborPaymentVoucherForUpdateById(id: string): Promise<ApiBaseState<ILaborPaymentVoucher>>;
    getLaborPaymentVoucherById(id: string): Promise<ApiBaseState<ILaborPaymentVoucher>>;
    updateLaborPaymentVoucher(id: string, data: FormData): Promise<ResultModel>;
    deleteLaborPaymentVoucherById(id: string): Promise<ResultModel>;
}
