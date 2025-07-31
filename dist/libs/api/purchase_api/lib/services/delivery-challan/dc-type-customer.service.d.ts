import { IDeliveryChallanTypeCustomer } from '../../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class DCTypeCustomerServices extends BaseService {
    private static _instance;
    static getInstance(): DCTypeCustomerServices;
    createDCTypeCustomer(data: FormData): Promise<ResultModel>;
    getAllDCTypeCustomer(queryParams?: QueryParams): Promise<ApiBaseState<IDeliveryChallanTypeCustomer[]>>;
    getDCTypeCustomerForViewById(id: string): Promise<ApiBaseState<IDeliveryChallanTypeCustomer>>;
    getDCTypeCustomerForUpdateById(id: string): Promise<ApiBaseState<IDeliveryChallanTypeCustomer>>;
    updateDCTypeCustomer(id: string, data: FormData): Promise<ResultModel>;
    deleteDCTypeCustomerById(id: string): Promise<ResultModel>;
}
