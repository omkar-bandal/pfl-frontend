import { ApiBaseState, BaseService, QueryParams, ResultModel, buildApiUrl } from "@prime-fresh/common_api";
import { adminApiUrlConstants } from "../../constants";
import { GetVendorCategory, PostVendorCategory } from "../../models";

export class VendorCategoryService extends BaseService {
    private static _instance: VendorCategoryService;

    public static getInstance(): VendorCategoryService {
        return this._instance || (this._instance = new this());
    }

    createVendorCategory(data: PostVendorCategory): Promise<ResultModel> {
        const url = adminApiUrlConstants.CREATE_VENDOR_CAT;
        return this.post(url, data);
    }

    getAllVendorCategories(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<GetVendorCategory[]>> {
        const url = buildApiUrl(adminApiUrlConstants.GET_ALL_VENDOR_CAT, null, queryParams, search);
        return this.get(url);
    }

    getVendorCategoryById(id: string): Promise<ApiBaseState<GetVendorCategory>> {
        const url = buildApiUrl(adminApiUrlConstants.GET_A_VENDOR_CAT, id);
        return this.get(url);
    }

    updateVendorCategory(id: string, data: GetVendorCategory): Promise<ResultModel> {
        const url = buildApiUrl(adminApiUrlConstants.UPDATE_VENDOR_CAT, id);
        return this.patch(url, data);
    }

    deleteVendorCategoryById(id: string): Promise<ResultModel> {
        const url = buildApiUrl(adminApiUrlConstants.DELETE_VENDOR_CAT, id);
        return this.delete(url);
    }
}