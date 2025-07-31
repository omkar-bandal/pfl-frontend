import { IPackingMaterialPaymentVoucher } from '../../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class PackingMeterialPaymentVoucherServices extends BaseService {
    private static _instance;
    static getInstance(): PackingMeterialPaymentVoucherServices;
    createPackingMeterialPaymentVoucher(data: FormData): Promise<ResultModel>;
    getAllPackingMeterialPaymentVouchers(queryParams?: QueryParams): Promise<ApiBaseState<IPackingMaterialPaymentVoucher[]>>;
    getPackingMeterialPaymentVoucherForViewById(id: string): Promise<ApiBaseState<IPackingMaterialPaymentVoucher>>;
    getPackingMeterialPaymentVoucherForUpdateById(id: string): Promise<ApiBaseState<IPackingMaterialPaymentVoucher>>;
    updatePackingMeterialPaymentVoucher(id: string, data: FormData): Promise<ResultModel>;
    deletePackingMeterialPaymentVoucherById(id: string): Promise<ResultModel>;
}
