import { ApiBaseState, BaseService, QueryParams, ResultModel, buildApiUrl } from "@prime-fresh/common_api";
import { adminApiUrlConstants } from "../../constants";
import { GetUOM, PostUOM } from "../../models";

export class UOMService extends BaseService {
    private static _instance: UOMService;

    public static getInstance(): UOMService {
        return this._instance || (this._instance = new this());
    }

    createUOM(data: PostUOM): Promise<ResultModel> {
        const url = adminApiUrlConstants.CREATE_UOM;
        return this.post(url, data);
    }

    getAllUOMs(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<GetUOM[]>> {
        const url = buildApiUrl(adminApiUrlConstants.GET_ALL_UOM, null, queryParams, search);
        return this.get(url);
    }

    getUOMById(id: string): Promise<ApiBaseState<GetUOM>> {
        const url = buildApiUrl(adminApiUrlConstants.GET_A_UOM, id);
        return this.get(url);
    }

    updateUOM(id: string, data: PostUOM): Promise<ResultModel> {
        const url = buildApiUrl(adminApiUrlConstants.UPDATE_UOM, id);
        return this.patch(url, data);
    }

    deleteUOMById(id: string): Promise<ResultModel> {
        const url = buildApiUrl(adminApiUrlConstants.DELETE_UOM, id);
        return this.delete(url);
    }
}