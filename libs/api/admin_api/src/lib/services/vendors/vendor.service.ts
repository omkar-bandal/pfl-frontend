import { ApiBaseState, BaseService, QueryParams, ResultModel } from "@prime-fresh/common_api";
import { GetVendor } from "../../models";
import { adminApiUrlConstants } from "../../constants";
import { buildApiUrl } from "@prime-fresh/shared/modules";

export class VendorsService extends BaseService {
    private static _instance: VendorsService;

    public static getInstance(): VendorsService {
        return this._instance || (this._instance = new this());
    }

    createVendor(data: FormData): Promise<ResultModel> {
        const url = adminApiUrlConstants.CREATE_VENDOR;
        return this.postFormData(url, data);
    }

    getAllVendors(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<GetVendor[]>> {
        const url = buildApiUrl(adminApiUrlConstants.GET_ALL_VENDORS, null, queryParams, search);
        return this.get(url);
    }

    getVendorById(id: string): Promise<ApiBaseState<GetVendor>> {
        const url = buildApiUrl(adminApiUrlConstants.GET_A_VENDOR, id);
        return this.get(url);
    }

    updateVendor(id: string, data: FormData): Promise<ResultModel> {
        const url = buildApiUrl(adminApiUrlConstants.UPDATE_VENDOR, id);
        return this.patchFormData(url, data);
    }

    deleteVendorById(id: string): Promise<ResultModel> {
        const url = buildApiUrl(adminApiUrlConstants.DELETE_VENDOR, id);
        return this.delete(url);
    }
}