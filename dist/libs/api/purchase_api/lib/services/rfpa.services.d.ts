import { GetRFPA, PostRFPA } from '../models';
import { ApiBaseState, BaseService, ResultModel } from '../../../../common_api/src/index.ts';

export declare class RFPAServices extends BaseService {
    private static _instance;
    static getInstance(): RFPAServices;
    createRFPA(data: PostRFPA): Promise<ResultModel>;
    getAllRFPAs(): Promise<ApiBaseState<GetRFPA[]>>;
    getRFPAById(id: string): Promise<ApiBaseState<GetRFPA>>;
    updateRFPA(id: string, data: GetRFPA): Promise<ResultModel>;
    deleteRFPAById(id: string): Promise<ResultModel>;
}
