import { IDealSlip } from '../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../common_api/src/index.ts';

export declare class DealSlipServices extends BaseService {
    private static _instance;
    static getInstance(): DealSlipServices;
    createDealSlip(data: IDealSlip): Promise<ResultModel>;
    getAllDealSlips(queryParams?: QueryParams): Promise<ApiBaseState<IDealSlip[]>>;
    getDealSlipForViewById(id: string): Promise<ApiBaseState<IDealSlip>>;
    getDealSlipForUpdateById(id: string): Promise<ApiBaseState<IDealSlip>>;
    updateDealSlip(id: string, data: IDealSlip): Promise<ResultModel>;
    deleteDealSlipById(id: string): Promise<ResultModel>;
}
