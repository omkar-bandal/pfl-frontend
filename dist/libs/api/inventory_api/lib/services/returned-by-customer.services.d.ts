import { IReturnByCustomer } from '../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../common_api/src/index.ts';

export declare class ReturnedByCustomerServices extends BaseService {
    private static _instance;
    static getInstance(): ReturnedByCustomerServices;
    createReturnedByCustomer(data: Omit<IReturnByCustomer, 'id'>): Promise<ResultModel>;
    getAllReturnedByCustomers(queryParams?: QueryParams): Promise<ApiBaseState<IReturnByCustomer[]>>;
    getReturnedByCustomerById(id: string): Promise<ApiBaseState<IReturnByCustomer>>;
    updateReturnedByCustomer(id: string, data: IReturnByCustomer): Promise<ResultModel>;
    deleteReturnedByCustomerById(id: string): Promise<ResultModel>;
}
