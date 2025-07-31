import { GetVendorCategory, PostVendorCategory } from '../../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class VendorCategoryService extends BaseService {
    private static _instance;
    static getInstance(): VendorCategoryService;
    createVendorCategory(data: PostVendorCategory): Promise<ResultModel>;
    getAllVendorCategories(queryParams?: QueryParams): Promise<ApiBaseState<GetVendorCategory[]>>;
    getVendorCategoryById(id: string): Promise<ApiBaseState<GetVendorCategory>>;
    updateVendorCategory(id: string, data: GetVendorCategory): Promise<ResultModel>;
    deleteVendorCategoryById(id: string): Promise<ResultModel>;
}
