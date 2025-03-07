import { GetUOM, PostUOM } from '../../models';
import { ApiBaseState, BaseService, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class UOMService extends BaseService {
    private static _instance;
    static getInstance(): UOMService;
    createUOM(data: PostUOM): Promise<ResultModel>;
    getAllUOMs(): Promise<ApiBaseState<GetUOM[]>>;
    getUOMById(id: string): Promise<ApiBaseState<GetUOM>>;
    updateUOM(id: string, data: PostUOM): Promise<ResultModel>;
    deleteUOMById(id: string): Promise<ResultModel>;
}
