import { GetVendorCategory, PostVendorCategory } from '../../models';
import { ApiBaseState, BaseService, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class VendorCategoryService extends BaseService {
    private static _instance;
    static getInstance(): VendorCategoryService;
    createVendorCategory(data: PostVendorCategory): Promise<ResultModel>;
    getAllVendorCategories(): Promise<ApiBaseState<GetVendorCategory[]>>;
    getVendorCategoryById(id: string): Promise<ApiBaseState<GetVendorCategory>>;
    updateVendorCategory(id: string, data: GetVendorCategory): Promise<ResultModel>;
    deleteProdctCategoryById(id: string): Promise<ResultModel>;
}
