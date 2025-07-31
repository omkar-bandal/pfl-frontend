import { ISecondSaleRegister } from '../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../common_api/src/index.ts';

export declare class SecondSaleRegisterServices extends BaseService {
    private static _instance;
    static getInstance(): SecondSaleRegisterServices;
    createSecondSaleRegister(data: Omit<ISecondSaleRegister, 'id'>): Promise<ResultModel>;
    getAllSecondSaleRegisters(queryParams?: QueryParams): Promise<ApiBaseState<ISecondSaleRegister[]>>;
    getSecondSaleRegisterForViewById(id: string): Promise<ApiBaseState<ISecondSaleRegister>>;
    getSecondSaleRegisterForUpdateById(id: string): Promise<ApiBaseState<ISecondSaleRegister>>;
    updateSecondSaleRegister(id: string, data: ISecondSaleRegister): Promise<ResultModel>;
    deleteSecondSaleRegisterById(id: string): Promise<ResultModel>;
}
