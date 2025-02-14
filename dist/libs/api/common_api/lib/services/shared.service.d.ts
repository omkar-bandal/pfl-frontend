import { BaseService } from './base.service';
import { ApiBaseState, BranchPartialData, CompanyNamesData, FarmerPartialData, ProductPartialData, UOMPartialData, VendorPartialData } from '../models';

export declare class SharedService extends BaseService {
    static _instance: SharedService;
    static getInstance(): SharedService;
    getCompanyNames(): Promise<ApiBaseState<CompanyNamesData[]>>;
    getProductsPatrialData(): Promise<ApiBaseState<ProductPartialData[]>>;
    getVendorsPatrialData(): Promise<ApiBaseState<VendorPartialData[]>>;
    getFarmersPatrialData(): Promise<ApiBaseState<FarmerPartialData[]>>;
    getUOMPartialData(): Promise<ApiBaseState<UOMPartialData[]>>;
    getBranchPartialData(): Promise<ApiBaseState<BranchPartialData[]>>;
}
