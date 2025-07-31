import { ApiBaseState, BaseService, QueryParams, ResultModel } from "@prime-fresh/common_api";
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

    getAllVendorCategories(queryParams? : QueryParams):Promise<ApiBaseState<GetVendorCategory[]>> {
        const url = adminApiUrlConstants.GET_ALL_VENDOR_CAT(queryParams);
        return this.get(url);
    }

    getVendorCategoryById(id: string): Promise<ApiBaseState<GetVendorCategory>> {
        const url = `${adminApiUrlConstants.GET_A_VENDOR_CAT}/${id}`;
        return this.get(url);
    }

    updateVendorCategory(id: string, data: GetVendorCategory): Promise<ResultModel> {
        const url = `${adminApiUrlConstants.UPDATE_VENDOR_CAT}/${id}`;
        return this.patch(url, data);
    }

    deleteVendorCategoryById(id: string): Promise<ResultModel> {
        const url = `${adminApiUrlConstants.DELETE_VENDOR_CAT}/${id}`;
        return this.delete(url);
    }
}