import { GetSecondSaleRegister, PostSecondSaleRegister } from '../models';
import { ApiBaseState, BaseService, ResultModel } from '../../../../common_api/src/index.ts';

export declare class SecondSaleRegisterServices extends BaseService {
    private static _instance;
    static getInstance(): SecondSaleRegisterServices;
    createSecondSaleRegister(data: PostSecondSaleRegister): Promise<ResultModel>;
    getAllSecondSaleRegisters(): Promise<ApiBaseState<GetSecondSaleRegister[]>>;
    getSecondSaleRegisterById(id: string): Promise<ApiBaseState<GetSecondSaleRegister>>;
    updateSecondSaleRegister(id: string, data: GetSecondSaleRegister): Promise<ResultModel>;
    deleteSecondSaleRegisterById(id: string): Promise<ResultModel>;
}
