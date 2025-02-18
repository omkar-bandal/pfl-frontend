import { GetAQR, PostAQR } from '../models';
import { ApiBaseState, BaseService, ResultModel } from '../../../../common_api/src/index.ts';

export declare class AQRServices extends BaseService {
    private static _instance;
    static getInstance(): AQRServices;
    createAQR(data: PostAQR): Promise<ResultModel>;
    getAllAQRs(): Promise<ApiBaseState<GetAQR[]>>;
    getAQRById(id: string): Promise<ApiBaseState<GetAQR>>;
    updateAQR(id: string, data: GetAQR): Promise<ResultModel>;
    deleteAQRById(id: string): Promise<ResultModel>;
}
