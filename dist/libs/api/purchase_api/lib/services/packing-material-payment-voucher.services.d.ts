import { GetPMPvoucher } from '../models';
import { ApiBaseState, BaseService, ResultModel } from '../../../../common_api/src/index.ts';

export declare class PackingMeterialPaymentVoucherServices extends BaseService {
    private static _instance;
    static getInstance(): PackingMeterialPaymentVoucherServices;
    createPackingMeterialPaymentVoucher(data: FormData): Promise<ResultModel>;
    getAllPackingMeterialPaymentVouchers(): Promise<ApiBaseState<GetPMPvoucher[]>>;
    GetPackingMeterialPaymentVoucherById(id: string): Promise<ApiBaseState<GetPMPvoucher>>;
    updatePackingMeterialPaymentVoucher(id: string, data: FormData): Promise<ResultModel>;
    deletePackingMeterialPaymentVoucherById(id: string): Promise<ResultModel>;
}
