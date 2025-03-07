import { GetDumpRegister, PostDumpRegister } from '../models';
import { ApiBaseState, BaseService, ResultModel } from '../../../../common_api/src/index.ts';

export declare class DumpRegisterServices extends BaseService {
    private static _instance;
    static getInstance(): DumpRegisterServices;
    createDumpRegister(data: PostDumpRegister): Promise<ResultModel>;
    getAllDumpRegisters(): Promise<ApiBaseState<GetDumpRegister[]>>;
    getDumpRegisterById(id: string): Promise<ApiBaseState<GetDumpRegister>>;
    updateDumpRegister(id: string, data: GetDumpRegister): Promise<ResultModel>;
    deleteDumpRegisterById(id: string): Promise<ResultModel>;
}
