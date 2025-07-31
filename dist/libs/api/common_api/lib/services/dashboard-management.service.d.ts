import { BaseService } from './base.service';
import { FarmerPurchaseData, ProductPurchaseData, VendorPurchaseData } from '../models';

export declare class DashboardManagementService extends BaseService {
    static _instance: DashboardManagementService;
    static getInstance(): DashboardManagementService;
    getPurchaseDataByVendor(vendorId: string): Promise<VendorPurchaseData>;
    getPurchaseDataByFarmer(farmerId: string): Promise<FarmerPurchaseData>;
    getPurchaseDataByProduct(productId: string): Promise<ProductPurchaseData>;
}
