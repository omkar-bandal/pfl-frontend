import { IAQR } from '../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../common_api/src/index.ts';

export declare class AQRServices extends BaseService {
    private static _instance;
    static getInstance(): AQRServices;
    createAQR(data: Partial<IAQR>): Promise<ResultModel>;
    getAllAQRs(queryParams?: QueryParams): Promise<ApiBaseState<IAQR[]>>;
    getAQRForUpdateById(id: string): Promise<ApiBaseState<IAQR>>;
    getAQRForViewById(id: string): Promise<ApiBaseState<IAQR>>;
    updateAQR(id: string, data: IAQR): Promise<ResultModel>;
    deleteAQRById(id: string): Promise<ResultModel>;
}
