import { IBranchesCount, ICustomerCount, IEmployeeCount, IFarmerCount, IProductCount, IVendorCount } from '../models';
import { BaseService } from '../../../../common_api/src/index.ts';

export declare class AdminDashboardService extends BaseService {
    private static _instance;
    static getInstance(): AdminDashboardService;
    getCountOfEmployees(): Promise<IEmployeeCount>;
    getCountOfFarmers(): Promise<IFarmerCount>;
    getCountOfVendors(): Promise<IVendorCount>;
    getCountOfCustomers(): Promise<ICustomerCount>;
    getCountOfProducts(): Promise<IProductCount>;
    getCountOfBranches(): Promise<IBranchesCount>;
}
