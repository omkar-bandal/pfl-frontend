import { ApiBaseState, BaseService, ResultModel } from "@prime-fresh/common_api";
import { GetAQR, PostAQR } from "../models";
import { inventoryApiUrl } from "../constants";

export class AQRServices extends BaseService {
    private static _instance: AQRServices;

    public static getInstance(): AQRServices {
        return this._instance || (this._instance = new this());
    }

    createAQR(data: PostAQR): Promise<ResultModel> {
        const url = inventoryApiUrl.CREATE_AQR;
        return this.post(url, data);
    }

    getAllAQRs():Promise<ApiBaseState<GetAQR[]>> {
        const url = inventoryApiUrl.GET_ALL_AQR;
        return this.get(url);
    }

    getAQRById(id: string): Promise<ApiBaseState<GetAQR>> {
        const url = `${inventoryApiUrl.GET_AQR_BY_ID}/${id}`;
        return this.get(url);
    }

    updateAQR(id: string, data: GetAQR): Promise<ResultModel> {
        const url = `${inventoryApiUrl.UPDATE_AQR}/${id}`;
        return this.patch(url, data);
    }

    deleteAQRById(id: string): Promise<ResultModel> {
        const url = `${inventoryApiUrl.DELETE_AQR}/${id}`;
        return this.delete(url);
    }
}