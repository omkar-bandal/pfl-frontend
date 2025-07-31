import { BaseService } from './base.service';
import { AllCompaniesData, ApiBaseState, ApprovalRequest, CompanyNamesData, CustomerNames, CustomerPartialData, EmployeePartialData, FarmerPartialData, GetAllDealSlipNums, GetAllDeliveryChallanNums, GetAllGRNNums, GetAllRFPANums, GetDepartment, GetLevels, GetProduct, INotification, LocationPartialData, PackagingMaterialPartialData, ProductPartialData, ResultModel, UOMPartialData, VendorPartialData } from '../models';

export declare class SharedService extends BaseService {
    static _instance: SharedService;
    static getInstance(): SharedService;
    updateDocStatusWithThreeApproval(id: string, data: ApprovalRequest): Promise<ResultModel>;
    updateDocStatusWithTwoApproval(id: string, data: ApprovalRequest): Promise<ResultModel>;
    updateDocStatusWithOneApproval(id: string, data: ApprovalRequest): Promise<ResultModel>;
    getAllUserNotifications(): Promise<ApiBaseState<INotification[]>>;
    getEmployeePartialData(): Promise<ApiBaseState<EmployeePartialData[]>>;
    getAllCompaniesData(): Promise<ApiBaseState<AllCompaniesData[]>>;
    getCompanyNames(): Promise<ApiBaseState<CompanyNamesData[]>>;
    getAllLevels(): Promise<ApiBaseState<GetLevels[]>>;
    getProductsPatrialData(): Promise<ApiBaseState<ProductPartialData[]>>;
    getProductsPatrialDataById(id: string): Promise<ApiBaseState<ProductPartialData>>;
    searchProductDataByQuery(query: string): Promise<ApiBaseState<ProductPartialData[]>>;
    searchProductAllDataByQuery(query: string): Promise<ApiBaseState<GetProduct[]>>;
    getPackagingMaterialPatrialData(): Promise<ApiBaseState<PackagingMaterialPartialData[]>>;
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
    getBranchPartialData(): Promise<ApiBaseState<LocationPartialData[]>>;
    getOfficePartialData(): Promise<ApiBaseState<LocationPartialData[]>>;
    getDepartmentById(deptId: string): Promise<ApiBaseState<GetDepartment>>;
}
