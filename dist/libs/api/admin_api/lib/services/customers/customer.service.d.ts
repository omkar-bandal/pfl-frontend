import { GetCustomer } from '../../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class CustomersService extends BaseService {
    private static _instance;
    static getInstance(): CustomersService;
    createCustomer(data: FormData): Promise<ResultModel>;
    getAllCustomers(queryParams?: QueryParams): Promise<ApiBaseState<GetCustomer[]>>;
    getCustomerById(id: string): Promise<ApiBaseState<GetCustomer>>;
    updateCustomer(id: string, data: FormData): Promise<ResultModel>;
    deleteCustomerById(id: string): Promise<ResultModel>;
}
