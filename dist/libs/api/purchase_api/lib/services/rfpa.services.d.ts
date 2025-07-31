import { IRFPA } from '../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../common_api/src/index.ts';

export declare class RFPAServices extends BaseService {
    private static _instance;
    static getInstance(): RFPAServices;
    createRFPA(data: IRFPA): Promise<ResultModel>;
    getAllRFPAs(queryParams?: QueryParams): Promise<ApiBaseState<IRFPA[]>>;
    getRFPAForViewById(id: string): Promise<ApiBaseState<IRFPA>>;
    getRFPAForUpdateById(id: string): Promise<ApiBaseState<IRFPA>>;
    updateRFPA(id: string, data: IRFPA): Promise<ResultModel>;
    deleteRFPAById(id: string): Promise<ResultModel>;
}
