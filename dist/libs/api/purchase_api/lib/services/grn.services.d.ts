import { GetGRN } from '../models';
import { ApiBaseState, BaseService, ResultModel } from '../../../../common_api/src/index.ts';

export declare class GRNServices extends BaseService {
    private static _instance;
    static getInstance(): GRNServices;
    createGRN(data: FormData): Promise<ResultModel>;
    getAllGRNs(): Promise<ApiBaseState<GetGRN[]>>;
    getGRNById(id: string): Promise<ApiBaseState<GetGRN>>;
    updateGRN(id: string, data: FormData): Promise<ResultModel>;
    deleteGRNById(id: string): Promise<ResultModel>;
}
