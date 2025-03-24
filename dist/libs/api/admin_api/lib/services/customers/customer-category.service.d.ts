import { GetCustomerCategory, PostCustomerCategory } from '../../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class CustomerCategoryService extends BaseService {
    private static _instance;
    static getInstance(): CustomerCategoryService;
    createCustomerCategory(data: PostCustomerCategory): Promise<ResultModel>;
    getAllCustomerCategories(queryParams?: QueryParams): Promise<ApiBaseState<GetCustomerCategory[]>>;
    getCustomerCategoryById(id: string): Promise<ApiBaseState<GetCustomerCategory>>;
    updateCustomerCategory(id: string, data: GetCustomerCategory): Promise<ResultModel>;
    deleteCustomerCategoryById(id: string): Promise<ResultModel>;
}
