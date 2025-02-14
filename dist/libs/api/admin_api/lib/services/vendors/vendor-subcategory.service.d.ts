import { GetVendorSubcategory, PostVendorSubcategory } from '../../models';
import { ApiBaseState, BaseService, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class VendorSubcategoryService extends BaseService {
    private static _instance;
    static getInstance(): VendorSubcategoryService;
    createVendorSubcategory(data: PostVendorSubcategory): Promise<ResultModel>;
    getAllVendorSubcategories(): Promise<ApiBaseState<GetVendorSubcategory[]>>;
    getVendorSubcategoryById(id: string): Promise<ApiBaseState<GetVendorSubcategory>>;
    updateVendorSubcategory(id: string, data: GetVendorSubcategory): Promise<ResultModel>;
    deleteProdctSubcategoryById(id: string): Promise<ResultModel>;
}
