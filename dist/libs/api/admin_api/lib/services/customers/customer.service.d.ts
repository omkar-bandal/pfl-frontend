import { GetCustomer } from '../../models';
import { ApiBaseState, BaseService, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class CustomersService extends BaseService {
    private static _instance;
    static getInstance(): CustomersService;
    createCustomer(data: FormData): Promise<ResultModel>;
    getAllCustomers(): Promise<ApiBaseState<GetCustomer[]>>;
    getCustomerById(id: string): Promise<ApiBaseState<GetCustomer>>;
    updateCustomer(id: string, data: FormData): Promise<ResultModel>;
    deleteCustomerById(id: string): Promise<ResultModel>;
}
