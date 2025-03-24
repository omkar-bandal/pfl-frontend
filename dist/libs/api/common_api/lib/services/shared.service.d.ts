import { BaseService } from './base.service';
import { ApiBaseState, BranchPartialData, CompanyNamesData, CustomerNames, CustomerPartialData, FarmerPartialData, GetAllDealSlipNums, GetAllDeliveryChallanNums, GetAllGRNNums, GetAllRFPANums, GetDepartment, GetProduct, ProductPartialData, UOMPartialData, VendorPartialData } from '../models';

export declare class SharedService extends BaseService {
    static _instance: SharedService;
    static getInstance(): SharedService;
    getCompanyNames(): Promise<ApiBaseState<CompanyNamesData[]>>;
    getProductsPatrialData(): Promise<ApiBaseState<ProductPartialData[]>>;
    getProductsPatrialDataById(id: string): Promise<ApiBaseState<ProductPartialData>>;
    searchProductDataByQuery(query: string): Promise<ApiBaseState<ProductPartialData[]>>;
    searchProductAllDataByQuery(query: string): Promise<ApiBaseState<GetProduct[]>>;
    getVendorsPatrialData(): Promise<ApiBaseState<VendorPartialData[]>>;
    getVendorsPatrialDataById(id: string): Promise<ApiBaseState<VendorPartialData>>;
    searchVendorDataByQuery(query: string): Promise<ApiBaseState<VendorPartialData[]>>;
    getFarmersPatrialData(): Promise<ApiBaseState<FarmerPartialData[]>>;
    getFarmersPatrialDataById(id: string): Promise<ApiBaseState<FarmerPartialData>>;
    searchFarmerDataByQuery(query: string): Promise<ApiBaseState<FarmerPartialData[]>>;
    getCustomerPatrialData(customerId: string): Promise<ApiBaseState<CustomerPartialData>>;
    getAllCustomerNames(): Promise<ApiBaseState<CustomerNames[]>>;
    getRFPANums(): Promise<ApiBaseState<GetAllRFPANums[]>>;
    getGRNNums(): Promise<ApiBaseState<GetAllGRNNums[]>>;
    getDealSlipNums(): Promise<ApiBaseState<GetAllDealSlipNums[]>>;
    getDeliveryChallanNums(): Promise<ApiBaseState<GetAllDeliveryChallanNums[]>>;
    getUOMPartialData(): Promise<ApiBaseState<UOMPartialData[]>>;
    getBranchPartialData(): Promise<ApiBaseState<BranchPartialData[]>>;
    getDepartmentById(deptId: string): Promise<ApiBaseState<GetDepartment>>;
}
