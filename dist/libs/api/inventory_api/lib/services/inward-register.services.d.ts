import { GetInwardRegister, PostInwardRegister } from '../models';
import { ApiBaseState, BaseService, ResultModel } from '../../../../common_api/src/index.ts';

export declare class InwardRegisterServices extends BaseService {
    private static _instance;
    static getInstance(): InwardRegisterServices;
    createInwardRegister(data: PostInwardRegister): Promise<ResultModel>;
    getAllInwardRegisters(): Promise<ApiBaseState<GetInwardRegister[]>>;
    getInwardRegisterById(id: string): Promise<ApiBaseState<GetInwardRegister>>;
    updateInwardRegister(id: string, data: GetInwardRegister): Promise<ResultModel>;
    deleteInwardRegisterById(id: string): Promise<ResultModel>;
}
