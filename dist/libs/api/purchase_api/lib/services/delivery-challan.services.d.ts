import { GetDeliveryChallan } from '../models';
import { ApiBaseState, BaseService, ResultModel } from '../../../../common_api/src/index.ts';

export declare class DeliveryChallanServices extends BaseService {
    private static _instance;
    static getInstance(): DeliveryChallanServices;
    createDeliveryChallan(data: FormData): Promise<ResultModel>;
    getAllDeliveryChallans(): Promise<ApiBaseState<GetDeliveryChallan[]>>;
    getDeliveryChallanById(id: string): Promise<ApiBaseState<GetDeliveryChallan>>;
    updateDeliveryChallan(id: string, data: FormData): Promise<ResultModel>;
    deleteDeliveryChallanById(id: string): Promise<ResultModel>;
}
