import { sharedApiUrlConstants } from "../constants";
import {
    ApiBaseState,
    BranchPartialData,
    CompanyNamesData,
    CustomerNames,
    CustomerPartialData,
    FarmerPartialData,
    GetAllDealSlipNums,
    GetAllDeliveryChallanNums,
    GetAllGRNNums,
    GetAllRFPANums,
    GetDepartment,
    GetProduct,
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
        const url = sharedApiUrlConstants.GET_COMPANY_NAMES;
        return this.get(url);
    }

    //Product Partial Data
    getProductsPatrialData(): Promise<ApiBaseState<ProductPartialData[]>> {
        const url = sharedApiUrlConstants.GET_PRODUCTS_PARTIAL;
        return this.get(url);
    }

    getProductsPatrialDataById(id: string): Promise<ApiBaseState<ProductPartialData>> {
        const url = `${sharedApiUrlConstants.GET_PRODUCTS_PARTIAL_BY_ID}/${id}`;
        return this.get(url);
    }

    searchProductDataByQuery(query: string): Promise<ApiBaseState<ProductPartialData[]>> {
        const url = `${sharedApiUrlConstants.SEARCH_PRODUCT}${query}`;
        return this.get(url);
    };

    searchProductAllDataByQuery(query: string): Promise<ApiBaseState<GetProduct[]>> {
        const url = `${sharedApiUrlConstants.SEARCH_PRODUCT_ALL_DATA}${query}`;
        return this.get(url);
    };

    //Vendor Partial Data
    getVendorsPatrialData(): Promise<ApiBaseState<VendorPartialData[]>> {
        const url = sharedApiUrlConstants.GET_VENDORS_PARTIAL;
        return this.get(url);
    }
    
    getVendorsPatrialDataById(id: string): Promise<ApiBaseState<VendorPartialData>> {
        const url = `${sharedApiUrlConstants.GET_VENDORS_PARTIAL_BY_ID}/${id}`;
        return this.get(url);
    }
    
    searchVendorDataByQuery(query: string): Promise<ApiBaseState<VendorPartialData[]>> {
        const url = `${sharedApiUrlConstants.SEARCH_VENDOR}${query}`;
        return this.get(url);
    };
    
    //Farmer Partial Data
    getFarmersPatrialData(): Promise<ApiBaseState<FarmerPartialData[]>> {
        const url = sharedApiUrlConstants.GET_FARMERS_PARTIAL;
        return this.get(url);
    }
    
    getFarmersPatrialDataById(id: string): Promise<ApiBaseState<FarmerPartialData>> {
        const url = `${sharedApiUrlConstants.GET_FARMERS_PARTIAL_BY_ID}/${id}`;
        return this.get(url);
    }

    searchFarmerDataByQuery(query: string): Promise<ApiBaseState<FarmerPartialData[]>> {
        const url = `${sharedApiUrlConstants.SEARCH_FARMER}${query}`;
        return this.get(url);
    };

    //Customer
    getCustomerPatrialData(customerId: string): Promise<ApiBaseState<CustomerPartialData>> {
        const url = `${sharedApiUrlConstants.GET_CUSTOMERS_PARTIAL}/${customerId}`;
        return this.get(url);
    }

    getAllCustomerNames(): Promise<ApiBaseState<CustomerNames[]>> {
        const url = sharedApiUrlConstants.GET_CUSTOMER_NAMESL;
        return this.get(url);
    }

    //Numbers
    getRFPANums(): Promise<ApiBaseState<GetAllRFPANums[]>> {
        const url = sharedApiUrlConstants.GET_ALL_RFPA_NO;
        return this.get(url);
    }
    getGRNNums(): Promise<ApiBaseState<GetAllGRNNums[]>> {
        const url = sharedApiUrlConstants.GET_ALL_GRN_NO;
        return this.get(url);
    }

    getDealSlipNums(): Promise<ApiBaseState<GetAllDealSlipNums[]>> {
        const url = sharedApiUrlConstants.GET_ALL_DEAL_SLIP_NO;
        return this.get(url);
    }

    getDeliveryChallanNums(): Promise<ApiBaseState<GetAllDeliveryChallanNums[]>> {
        const url = sharedApiUrlConstants.GET_ALL_DELIVERY_CHALLAN_NO;
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
    
    getDepartmentById(deptId: string): Promise<ApiBaseState<GetDepartment>> {
        const url = `${sharedApiUrlConstants.GET_DEPARTMENT_BY_ID}/${deptId}`;
        return this.get(url)
    }

}