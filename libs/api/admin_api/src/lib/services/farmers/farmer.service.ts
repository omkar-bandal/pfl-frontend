import { ApiBaseState, BaseService, QueryParams, ResultModel, buildApiUrl } from "@prime-fresh/common_api";
import { GetFarmer } from "../../models";
import { adminApiUrlConstants } from "../../constants";

export class FarmersService extends BaseService {
    private static _instance: FarmersService;

    public static getInstance(): FarmersService {
        return this._instance || (this._instance = new this());
    }

    createFarmer(data: FormData): Promise<ResultModel> {
        const url = adminApiUrlConstants.CREATE_FARMER;
        return this.postFormData(url, data);
    }

    getAllFarmers(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<GetFarmer[]>> {
        const url = buildApiUrl(adminApiUrlConstants.GET_ALL_FARMERS, null, queryParams, search);
        return this.get(url);
    }

    getFarmerById(id: string): Promise<ApiBaseState<GetFarmer>> {
        const url = buildApiUrl(adminApiUrlConstants.GET_A_FARMER, id);
        return this.get(url);
    }

    updateFarmer(id: string, data: FormData): Promise<ResultModel> {
        const url = buildApiUrl(adminApiUrlConstants.UPDATE_FARMER, id);
        return this.putFormData(url, data);
    }

    deleteFarmerById(id: string): Promise<ResultModel> {
        const url = buildApiUrl(adminApiUrlConstants.DELETE_FARMER, id);
        return this.delete(url);
    }
}