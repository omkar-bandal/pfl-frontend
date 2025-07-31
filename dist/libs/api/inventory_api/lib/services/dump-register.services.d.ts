import { IDumpRegister } from '../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../common_api/src/index.ts';

export declare class DumpRegisterServices extends BaseService {
    private static _instance;
    static getInstance(): DumpRegisterServices;
    createDumpRegister(data: IDumpRegister): Promise<ResultModel>;
    getAllDumpRegisters(queryParams?: QueryParams): Promise<ApiBaseState<IDumpRegister[]>>;
    getDumpRegisterForViewById(id: string): Promise<ApiBaseState<IDumpRegister>>;
    getDumpRegisterForUpdateById(id: string): Promise<ApiBaseState<IDumpRegister>>;
    updateDumpRegister(id: string, data: IDumpRegister): Promise<ResultModel>;
    deleteDumpRegisterById(id: string): Promise<ResultModel>;
}
