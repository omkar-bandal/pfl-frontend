import { ApiBaseState, BaseService, buildUrlForFilters } from '../../base';
import { sharedApiUrls } from '../constants';
import {
  IAdminDashboardPurchaseData,
  IAdminDashboardSalesData,
  IBranchesCount,
  ICustomerCount,
  IEmployeeCount,
  IFarmerCount,
  IProductCount,
  IRegistrationsData,
  IUserStatisticData,
  IVendorCount,
} from '../models';

export class AdminDashboardService extends BaseService {
  private static _instance: AdminDashboardService;

  public static getInstance(): AdminDashboardService {
    return this._instance || (this._instance = new this());
  }

  getRegistrationData(filterParams?: Record<string, any> | null): Promise<ApiBaseState<IRegistrationsData>> {
    const url = buildUrlForFilters(sharedApiUrls.GET_USER_REGISTRATION_COUNT, filterParams);
    return this.get(url);
  }

  getUserStatisticData(): Promise<ApiBaseState<IUserStatisticData>> {
    const url = sharedApiUrls.GET_USERS_STATISTICS;
    return this.get(url);
  }

  getAdminDashboardPurchaseData(
    filterParams: Record<string, any> | null
  ): Promise<ApiBaseState<IAdminDashboardPurchaseData>> {
    const url = buildUrlForFilters(sharedApiUrls.GET_USER_REPORT_PURCHASE_DATA, filterParams);
    return this.get(url);
  }

  getAdminDashboardSalesData(filterParams: Record<string, any> | null): Promise<ApiBaseState<IAdminDashboardSalesData>> {
    const url = buildUrlForFilters(sharedApiUrls.GET_USER_REPORT_SALES_DATA, filterParams);
    return this.get(url);
  }

  getCountOfEmployees(): Promise<IEmployeeCount> {
    const url = sharedApiUrls.COUNT_EMPLOYEE;
    return this.get(url);
  }

  getCountOfFarmers(): Promise<IFarmerCount> {
    const url = sharedApiUrls.COUNT_FARMER;
    return this.get(url);
  }

  getCountOfVendors(): Promise<IVendorCount> {
    const url = sharedApiUrls.COUNT_VENDOR;
    return this.get(url);
  }

  getCountOfCustomers(): Promise<ICustomerCount> {
    const url = sharedApiUrls.COUNT_CUSTOMER;
    return this.get(url);
  }

  getCountOfProducts(): Promise<IProductCount> {
    const url = sharedApiUrls.COUNT_PRODUCTS;
    return this.get(url);
  }

  getCountOfBranches(): Promise<IBranchesCount> {
    const url = sharedApiUrls.COUNT_BRANCHES;
    return this.get(url);
  }
}
