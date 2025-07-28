import { sharedApiUrls } from '../constants';
import {
  AllCompaniesData,
  ApiBaseState,
  ApprovalRequest,
  CompanyNamesData,
  CustomerNames,
  CustomerPartialData,
  EmployeePartialData,
  FarmerPartialData,
  GetAllDealSlipNums,
  GetAllDeliveryChallanNums,
  GetAllGRNNums,
  GetAllRFPANums,
  GetDepartment,
  GetLevels,
  GetProduct,
  INotification,
  LocationPartialData,
  PackagingMaterialPartialData,
  ProductPartialData,
  ResultModel,
  UOMPartialData,
  VendorPartialData,
} from '../models';
import { BaseService } from './base.service';

export class SharedService extends BaseService {
  public static _instance: SharedService;

  public static getInstance(): SharedService {
    return this._instance || (this._instance = new this());
  }
  //Approval
  updateDocStatusWithThreeApproval(id: string, data: ApprovalRequest): Promise<ResultModel> {
    console.log('Document Id:', id)
    const url = sharedApiUrls.UPDATE_DOCUMENT_STATUS_THREE_LEVEL_APPROVAL(id);
    return this.patch(url, data);
  }

  updateDocStatusWithTwoApproval(id: string, data: ApprovalRequest): Promise<ResultModel> {
    console.log('Document Id:', id)
    const url = sharedApiUrls.UPDATE_DOCUMENT_STATUS_TWO_LEVEL_APPROVAL(id);
    return this.patch(url, data);
  }

  updateDocStatusWithOneApproval(id: string, data: ApprovalRequest): Promise<ResultModel> {
    console.log('Document Id:', id)
    const url = sharedApiUrls.UPDATE_DOCUMENT_STATUS_ONE_LEVEL_APPROVAL(id);
    return this.patch(url, data);
  }

  //Notifications
  getAllUserNotifications(): Promise<ApiBaseState<INotification[]>> {
    const url = sharedApiUrls.GET_NOTIFICATIONS_BY_USER;
    return this.get(url);
  }

  getEmployeePartialData(): Promise<ApiBaseState<EmployeePartialData[]>> {
    const url = sharedApiUrls.GET_EMPLOYEE_PARTIAL_DATA;
    return this.get(url);
  }

  getAllCompaniesData(): Promise<ApiBaseState<AllCompaniesData[]>> {
    const url = sharedApiUrls.GET_ALL_COMPANIES_DATA;
    return this.get(url);
  }

  getCompanyNames(): Promise<ApiBaseState<CompanyNamesData[]>> {
    const url = sharedApiUrls.GET_COMPANY_NAMES;
    return this.get(url);
  }

  getAllLevels(): Promise<ApiBaseState<GetLevels[]>> {
    const url = sharedApiUrls.GET_ALL_LEVELS;
    return this.get(url);
  }

  //Product Partial Data
  getProductsPatrialData(): Promise<ApiBaseState<ProductPartialData[]>> {
    const url = sharedApiUrls.GET_PRODUCTS_PARTIAL;
    return this.get(url);
  }

  getProductsPatrialDataById(id: string): Promise<ApiBaseState<ProductPartialData>> {
    const url = `${sharedApiUrls.GET_PRODUCTS_PARTIAL_BY_ID}/${id}`;
    return this.get(url);
  }

  searchProductDataByQuery(query: string): Promise<ApiBaseState<ProductPartialData[]>> {
    const url = `${sharedApiUrls.SEARCH_PRODUCT}${query}`;
    return this.get(url);
  }

  searchProductAllDataByQuery(query: string): Promise<ApiBaseState<GetProduct[]>> {
    const url = `${sharedApiUrls.SEARCH_PRODUCT_ALL_DATA}${query}`;
    return this.get(url);
  }

  //Packaging Material
  getPackagingMaterialPatrialData(): Promise<ApiBaseState<PackagingMaterialPartialData[]>> {
    const url = sharedApiUrls.GET_PACKAGING_MATERIAL_PARTIAL;
    return this.get(url);
  }

  //Vendor Partial Data
  getVendorsPatrialData(): Promise<ApiBaseState<VendorPartialData[]>> {
    const url = sharedApiUrls.GET_VENDORS_PARTIAL;
    return this.get(url);
  }

  getVendorsPatrialDataById(id: string): Promise<ApiBaseState<VendorPartialData>> {
    const url = `${sharedApiUrls.GET_VENDORS_PARTIAL_BY_ID}/${id}`;
    return this.get(url);
  }

  searchVendorDataByQuery(query: string): Promise<ApiBaseState<VendorPartialData[]>> {
    const url = `${sharedApiUrls.SEARCH_VENDOR}${query}`;
    return this.get(url);
  }

  //Farmer Partial Data
  getFarmersPatrialData(): Promise<ApiBaseState<FarmerPartialData[]>> {
    const url = sharedApiUrls.GET_FARMERS_PARTIAL;
    return this.get(url);
  }

  getFarmersPatrialDataById(id: string): Promise<ApiBaseState<FarmerPartialData>> {
    const url = `${sharedApiUrls.GET_FARMERS_PARTIAL_BY_ID}/${id}`;
    return this.get(url);
  }

  searchFarmerDataByQuery(query: string): Promise<ApiBaseState<FarmerPartialData[]>> {
    const url = `${sharedApiUrls.SEARCH_FARMER}${query}`;
    return this.get(url);
  }

  //Customer
  getCustomerPatrialData(customerId: string): Promise<ApiBaseState<CustomerPartialData>> {
    const url = `${sharedApiUrls.GET_CUSTOMERS_PARTIAL}/${customerId}`;
    return this.get(url);
  }

  getAllCustomerNames(): Promise<ApiBaseState<CustomerNames[]>> {
    const url = sharedApiUrls.GET_CUSTOMER_NAMESL;
    return this.get(url);
  }

  //Numbers
  getRFPANums(): Promise<ApiBaseState<GetAllRFPANums[]>> {
    const url = sharedApiUrls.GET_ALL_RFPA_NO;
    return this.get(url);
  }
  getGRNNums(): Promise<ApiBaseState<GetAllGRNNums[]>> {
    const url = sharedApiUrls.GET_ALL_GRN_NO;
    return this.get(url);
  }

  getDealSlipNums(): Promise<ApiBaseState<GetAllDealSlipNums[]>> {
    const url = sharedApiUrls.GET_ALL_DEAL_SLIP_NO;
    return this.get(url);
  }

  getDeliveryChallanNums(): Promise<ApiBaseState<GetAllDeliveryChallanNums[]>> {
    const url = sharedApiUrls.GET_ALL_DELIVERY_CHALLAN_NO;
    return this.get(url);
  }

  getUOMPartialData(): Promise<ApiBaseState<UOMPartialData[]>> {
    const url = sharedApiUrls.GET_UOM_PARTIAL;
    return this.get(url);
  }

  getBranchPartialData(): Promise<ApiBaseState<LocationPartialData[]>> {
    const url = sharedApiUrls.GET_BRANCHES_PARTIAL;
    return this.get(url);
  }

  getOfficePartialData(): Promise<ApiBaseState<LocationPartialData[]>> {
    const url = sharedApiUrls.GET_OFFICES_PARTIAL;
    return this.get(url);
  }

  getDepartmentById(deptId: string): Promise<ApiBaseState<GetDepartment>> {
    const url = `${sharedApiUrls.GET_DEPARTMENT_BY_ID}/${deptId}`;
    return this.get(url);
  }
}
