import { GetUOM, PostUOM } from '../../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class UOMService extends BaseService {
    private static _instance;
    static getInstance(): UOMService;
    createUOM(data: PostUOM): Promise<ResultModel>;
    getAllUOMs({ page, limit, sort }: QueryParams): Promise<ApiBaseState<GetUOM[]>>;
    getUOMById(id: string): Promise<ApiBaseState<GetUOM>>;
    updateUOM(id: string, data: PostUOM): Promise<ResultModel>;
    deleteUOMById(id: string): Promise<ResultModel>;
}
