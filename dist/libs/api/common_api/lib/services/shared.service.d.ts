import { BaseService } from './base.service';
import { ApiBaseState, BranchPartialData, CompanyNamesData, CustomerNames, CustomerPartialData, FarmerPartialData, GetAllDealSlipNums, GetAllDeliveryChallanNums, GetAllGRNNums, GetAllRFPANums, ProductPartialData, UOMPartialData, VendorPartialData } from '../models';

export declare class SharedService extends BaseService {
    static _instance: SharedService;
    static getInstance(): SharedService;
    getCompanyNames(): Promise<ApiBaseState<CompanyNamesData[]>>;
    getProductsPatrialData(): Promise<ApiBaseState<ProductPartialData[]>>;
    getVendorsPatrialData(): Promise<ApiBaseState<VendorPartialData[]>>;
    getFarmersPatrialData(): Promise<ApiBaseState<FarmerPartialData[]>>;
    getCustomerPatrialData(customerId: string): Promise<ApiBaseState<CustomerPartialData>>;
    getAllCustomerNames(): Promise<ApiBaseState<CustomerNames[]>>;
    getUOMPartialData(): Promise<ApiBaseState<UOMPartialData[]>>;
    getBranchPartialData(): Promise<ApiBaseState<BranchPartialData[]>>;
    getRFPANums(): Promise<ApiBaseState<GetAllRFPANums[]>>;
    getGRNNums(): Promise<ApiBaseState<GetAllGRNNums[]>>;
    getDealSlipNums(): Promise<ApiBaseState<GetAllDealSlipNums[]>>;
    getDeliveryChallanNums(): Promise<ApiBaseState<GetAllDeliveryChallanNums[]>>;
}
