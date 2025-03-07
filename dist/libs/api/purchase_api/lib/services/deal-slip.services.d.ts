import { GetDealSlip, PostDealSlip } from '../models';
import { ApiBaseState, BaseService, ResultModel } from '../../../../common_api/src/index.ts';

export declare class DealSlipServices extends BaseService {
    private static _instance;
    static getInstance(): DealSlipServices;
    createDealSlip(data: PostDealSlip): Promise<ResultModel>;
    getAllDealSlips(): Promise<ApiBaseState<GetDealSlip[]>>;
    getDealSlipById(id: string): Promise<ApiBaseState<GetDealSlip>>;
    updateDealSlip(id: string, data: GetDealSlip): Promise<ResultModel>;
    deleteDealSlipById(id: string): Promise<ResultModel>;
}
