import { GetPackagingMaterial, PostPackagingMaterial } from '../../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class PackagingMaterialService extends BaseService {
    private static _instance;
    static getInstance(): PackagingMaterialService;
    createPackagingMaterial(data: PostPackagingMaterial): Promise<ResultModel>;
    getAllPackagingMaterials(queryParams?: QueryParams): Promise<ApiBaseState<GetPackagingMaterial[]>>;
    getPackagingMaterialById(id: string): Promise<ApiBaseState<GetPackagingMaterial>>;
    updatePackagingMaterial(id: string, data: GetPackagingMaterial): Promise<ResultModel>;
    deletePackagingMaterialById(id: string): Promise<ResultModel>;
}
