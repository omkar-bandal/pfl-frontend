import { ApiBaseState, BaseService, QueryParams, ResultModel, buildApiUrl } from "@prime-fresh/common_api";
import { adminApiUrlConstants } from "../../constants";
import { GetVendorSubcategory, PostVendorSubcategory } from "../../models";

export class VendorSubcategoryService extends BaseService {
    private static _instance: VendorSubcategoryService;

    public static getInstance(): VendorSubcategoryService {
        return this._instance || (this._instance = new this());
    }

    createVendorSubcategory(data: PostVendorSubcategory): Promise<ResultModel> {
        const url = adminApiUrlConstants.CREATE_VENDOR_SUBCAT;
        return this.post(url, data);
    }

    getAllVendorSubcategories(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<GetVendorSubcategory[]>> {
        const url = buildApiUrl(adminApiUrlConstants.GET_ALL_VENDOR_SUBCAT, null, queryParams, search);
        return this.get(url);
    }

    getVendorSubcategoryById(id: string): Promise<ApiBaseState<GetVendorSubcategory>> {
        const url = buildApiUrl(adminApiUrlConstants.GET_A_VENDOR_SUBCAT, id);
        return this.get(url);
    }

    updateVendorSubcategory(id: string, data: GetVendorSubcategory): Promise<ResultModel> {
        const url = buildApiUrl(adminApiUrlConstants.UPDATE_VENDOR_SUBCAT, id);
        return this.patch(url, data);
    }
    deleteProdctSubcategoryById(id: string): Promise<ResultModel> {
        const url = buildApiUrl(adminApiUrlConstants.DELETE_VENDOR_SUBCAT, id);
        return this.delete(url);
    }

    getVendorSubcategoryByQuery(query: string): Promise<ApiBaseState<GetVendorSubcategory[]>> {
        const url = `${adminApiUrlConstants.GET_VENDOR_SUBCAT_BY_QUERY}?search=${query}`;
        return this.get(url);
    }
}