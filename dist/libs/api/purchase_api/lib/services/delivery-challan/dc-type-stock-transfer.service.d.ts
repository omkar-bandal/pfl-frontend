import { IDeliveryChallanTypeStockTransfer } from '../../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class DCTypeStockTransferServices extends BaseService {
    private static _instance;
    static getInstance(): DCTypeStockTransferServices;
    createDCTypeStockTransfer(data: FormData): Promise<ResultModel>;
    getAllDCTypeStockTransfer(queryParams?: QueryParams): Promise<ApiBaseState<IDeliveryChallanTypeStockTransfer[]>>;
    getDCTypeStockTransferForViewById(id: string): Promise<ApiBaseState<IDeliveryChallanTypeStockTransfer>>;
    getDCTypeStockTransferForUpdateById(id: string): Promise<ApiBaseState<IDeliveryChallanTypeStockTransfer>>;
    updateDCTypeStockTransfer(id: string, data: FormData): Promise<ResultModel>;
    deleteDCTypeStockTransferById(id: string): Promise<ResultModel>;
}
