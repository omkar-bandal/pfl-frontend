import { IGRN } from '../models';
import { ApiBaseState, ApprovalRequest, BaseService, QueryParams, ResultModel } from '../../../../common_api/src/index.ts';

export declare class GRNServices extends BaseService {
    private static _instance;
    static getInstance(): GRNServices;
    createGRN(data: FormData): Promise<ResultModel>;
    getAllGRNs(queryParams?: QueryParams): Promise<ApiBaseState<IGRN[]>>;
    getGRNForViewById(id: string): Promise<ApiBaseState<IGRN>>;
    getGRNForUpdateById(id: string): Promise<ApiBaseState<IGRN>>;
    updateGRN(id: string, data: FormData): Promise<ResultModel>;
    deleteGRNById(id: string): Promise<ResultModel>;
    approveGRN(id: string, data: ApprovalRequest): Promise<ResultModel>;
}
