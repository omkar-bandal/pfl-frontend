import { GetProductCategory, PostProductCategory } from '../../models';
import { ApiBaseState, BaseService, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class ProductCategoryService extends BaseService {
    private static _instance;
    static getInstance(): ProductCategoryService;
    createProductCategory(data: PostProductCategory): Promise<ResultModel>;
    getAllProductCategories(): Promise<ApiBaseState<GetProductCategory[]>>;
    getProductCategoryById(id: string): Promise<ApiBaseState<GetProductCategory>>;
    updateProductCategory(id: string, data: GetProductCategory): Promise<ResultModel>;
    deleteProductCategoryById(id: string): Promise<ResultModel>;
}
