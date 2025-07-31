import { GetFarmer } from '../../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class FarmersService extends BaseService {
    private static _instance;
    static getInstance(): FarmersService;
    createFarmer(data: FormData): Promise<ResultModel>;
    getAllFarmers(queryParams?: QueryParams): Promise<ApiBaseState<GetFarmer[]>>;
    getFarmerById(id: string): Promise<ApiBaseState<GetFarmer>>;
    updateFarmer(id: string, data: FormData): Promise<ResultModel>;
    deleteFarmerById(id: string): Promise<ResultModel>;
}
