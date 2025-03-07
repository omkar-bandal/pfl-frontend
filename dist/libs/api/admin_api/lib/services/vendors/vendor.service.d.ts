import { GetVendor } from '../../models';
import { ApiBaseState, BaseService, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class VendorsService extends BaseService {
    private static _instance;
    static getInstance(): VendorsService;
    createVendor(data: FormData): Promise<ResultModel>;
    getAllVendors(): Promise<ApiBaseState<GetVendor[]>>;
    getVendorById(id: string): Promise<ApiBaseState<GetVendor>>;
    updateVendor(id: string, data: FormData): Promise<ResultModel>;
    deleteVendorById(id: string): Promise<ResultModel>;
}
