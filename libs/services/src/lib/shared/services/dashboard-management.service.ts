/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiBaseState, BaseService, buildUrlForFilters } from '../../base';
import { DashboardData } from '../../operations';
import { FarmerPurchaseData, ProductPurchaseData, VendorPurchaseData } from '../models';

export class DashboardManagementService extends BaseService {
  public static _instance: DashboardManagementService;

  public static getInstance(): DashboardManagementService {
    return this._instance || (this._instance = new this());
  }
  getPurchaseDataByVendor(vendorId: string): Promise<VendorPurchaseData> {
    const url = `/api/management/getGrns/management/vender/${vendorId}`;
    return this.get(url);
  }
  getPurchaseDataByFarmer(farmerId: string): Promise<FarmerPurchaseData> {
    const url = `/api/management/getGrns/management/farmer/${farmerId}`;
    return this.get(url);
  }
  getPurchaseDataByProduct(productId: string | null): Promise<ProductPurchaseData> {
    const url = `/api/management/getGrns/management/product/${productId}`;
    return this.get(url);
  }
  getDashboardData(filterParams: Record<string, any> | null): Promise<ApiBaseState<DashboardData>> {
        const url = buildUrlForFilters("/api/management/getGrns/management", filterParams,);
        return this.get(url);
    }
}
