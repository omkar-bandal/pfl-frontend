import { BaseService } from "@prime-fresh/common_api";
import { adminApiUrlConstants } from "../constants";
import {
  IBranchesCount,
  ICustomerCount,
  IEmployeeCount,
  IFarmerCount,
  IProductCount,
  IVendorCount
} from "../models";

export class AdminDashboardService extends BaseService {
  private static _instance: AdminDashboardService;

  public static getInstance(): AdminDashboardService {
    return this._instance || (this._instance = new this());
  }

  getCountOfEmployees(): Promise<IEmployeeCount> {
    const url = adminApiUrlConstants.COUNT_EMPLOYEE;
    return this.get(url);
  }

  getCountOfFarmers(): Promise<IFarmerCount> {
    const url = adminApiUrlConstants.COUNT_FARMER;
    return this.get(url);
  }

  getCountOfVendors(): Promise<IVendorCount> {
    const url = adminApiUrlConstants.COUNT_VENDOR;
    return this.get(url);
  }

  getCountOfCustomers(): Promise<ICustomerCount> {
    const url = adminApiUrlConstants.COUNT_CUSTOMER;
    return this.get(url);
  }

  getCountOfProducts(): Promise<IProductCount> {
    const url = adminApiUrlConstants.COUNT_PRODUCTS;
    return this.get(url);
  }

  getCountOfBranches(): Promise<IBranchesCount> {
    const url = adminApiUrlConstants.COUNT_BRANCHES;
    return this.get(url);
  }

}