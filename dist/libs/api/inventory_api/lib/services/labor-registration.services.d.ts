import { GetLaborRegistration, PostLaborRegistration } from '../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../common_api/src/index.ts';

export declare class LaborRegistrationServices extends BaseService {
    private static _instance;
    static getInstance(): LaborRegistrationServices;
    createLaborRegistration(data: PostLaborRegistration): Promise<ResultModel>;
    getAllRegistreredLabors(queryParams?: QueryParams): Promise<ApiBaseState<GetLaborRegistration[]>>;
    getRegistreredLaborById(id: string): Promise<ApiBaseState<GetLaborRegistration>>;
    updateRegistreredLabor(id: string, data: GetLaborRegistration): Promise<ResultModel>;
    deleteRegistreredLaborById(id: string): Promise<ResultModel>;
}
