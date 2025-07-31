import { GetProductSubcategory, PostProductSubcategory } from '../../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class ProductSubcategoryService extends BaseService {
    private static _instance;
    static getInstance(): ProductSubcategoryService;
    createProductSubcategory(data: PostProductSubcategory): Promise<ResultModel>;
    getAllProductSubcategories(queryParams?: QueryParams): Promise<ApiBaseState<GetProductSubcategory[]>>;
    getProductSubcategoryById(id: string): Promise<ApiBaseState<GetProductSubcategory>>;
    updateProductSubcategory(id: string, data: GetProductSubcategory): Promise<ResultModel>;
    deleteProductSubcategoryById(id: string): Promise<ResultModel>;
}
