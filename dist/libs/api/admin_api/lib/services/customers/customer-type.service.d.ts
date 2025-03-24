import { GetCustomerType, PostCustomerType } from '../../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class CustomerTypeService extends BaseService {
    private static _instance;
    static getInstance(): CustomerTypeService;
    createCustomerType(data: PostCustomerType): Promise<ResultModel>;
    getAllCustomerCategories(queryParams?: QueryParams): Promise<ApiBaseState<GetCustomerType[]>>;
    getCustomerTypeById(id: string): Promise<ApiBaseState<GetCustomerType>>;
    updateCustomerType(id: string, data: GetCustomerType): Promise<ResultModel>;
    deleteCustomerTypeById(id: string): Promise<ResultModel>;
}
