import { GetOffices, PostOffices } from '../../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class OfficeService extends BaseService {
    private static _instance;
    static getInstance(): OfficeService;
    createOffice(data: PostOffices, officeType: string): Promise<ResultModel>;
    getAllOffice(officeType: string, queryParams?: QueryParams): Promise<ApiBaseState<GetOffices[]>>;
    getOfficeById(id: string, officeType: string): Promise<ApiBaseState<GetOffices>>;
    updateOffice(id: string, officeType: string, data: PostOffices): Promise<ResultModel>;
    deleteOfficeById(id: string, officeType: string): Promise<ResultModel>;
}
