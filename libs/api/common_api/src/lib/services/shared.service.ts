import { SHARED_API_URL, sharedApiUrlConstants } from "../constants";
import {
    ApiBaseState,
    BranchPartialData,
    CompanyNamesData,
    FarmerPartialData,
    ProductPartialData,
    UOMPartialData,
    VendorPartialData
} from "../models";
import { BaseService } from "./base.service";

export class SharedService extends BaseService {
    public static _instance: SharedService;

    public static getInstance(): SharedService {
        return this._instance || (this._instance = new this());
    }

    getCompanyNames(): Promise<ApiBaseState<CompanyNamesData[]>> {
        // const url = sharedApiUrlConstants.GET_COMPANY_NAMES;
        const url = SHARED_API_URL.COMPANY_NAMES;
        return this.get(url);
    }

    getProductsPatrialData(): Promise<ApiBaseState<ProductPartialData[]>> {
        const url = sharedApiUrlConstants.GET_PRODUCTS_PARTIAL;
        return this.get(url);
    }

    getVendorsPatrialData(): Promise<ApiBaseState<VendorPartialData[]>> {
        const url = sharedApiUrlConstants.GET_VENDORS_PARTIAL;
        return this.get(url);
    }

    getFarmersPatrialData(): Promise<ApiBaseState<FarmerPartialData[]>> {
        const url = sharedApiUrlConstants.GET_FARMERS_PARTIAL;
        return this.get(url);
    }

    getUOMPartialData(): Promise<ApiBaseState<UOMPartialData[]>> {
        const url = sharedApiUrlConstants.GET_UOM_PARTIAL;
        return this.get(url);
    }

    getBranchPartialData(): Promise<ApiBaseState<BranchPartialData[]>> {
        const url = sharedApiUrlConstants.GET_BRANCHES_PARTIAL;
        return this.get(url);
    }


}