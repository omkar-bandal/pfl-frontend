import { IInwardRegister } from '../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../common_api/src/index.ts';

export declare class InwardRegisterServices extends BaseService {
    private static _instance;
    static getInstance(): InwardRegisterServices;
    createInwardRegister(data: IInwardRegister): Promise<ResultModel>;
    getAllInwardRegisters(queryParams?: QueryParams): Promise<ApiBaseState<IInwardRegister[]>>;
    getInwardRegisterForViewById(id: string): Promise<ApiBaseState<IInwardRegister>>;
    getInwardRegisterForUpdateById(id: string): Promise<ApiBaseState<IInwardRegister>>;
    updateInwardRegister(id: string, data: IInwardRegister): Promise<ResultModel>;
    deleteInwardRegisterById(id: string): Promise<ResultModel>;
}
