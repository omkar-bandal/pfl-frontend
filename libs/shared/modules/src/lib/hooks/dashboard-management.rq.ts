/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiBaseState, DashboardData, DashboardManagementService } from '@prime-fresh/services';
import { ErrorModel } from '@prime-fresh/services';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { FarmerPurchaseData, ProductPurchaseData, VendorPurchaseData } from '../models';

export function useGetDashboardData(filterParams: Record<string, any> | null):
    UseQueryResult<ApiBaseState<DashboardData>, ErrorModel> {
    return useQuery<ApiBaseState<DashboardData>, ErrorModel>({
        queryKey: ['get-dashboard-data', filterParams],
        queryFn: () => DashboardManagementService.getInstance().getDashboardData(filterParams),
        enabled: !!filterParams
    });
}

export const useGetPurchaseDataByVendor = (vendorId: string): UseQueryResult<VendorPurchaseData, ErrorModel> => {
  return useQuery<VendorPurchaseData, ErrorModel>({
    queryKey: ['vendor-purchase-data', vendorId],
    queryFn: () => DashboardManagementService.getInstance().getPurchaseDataByVendor(vendorId),
    enabled: !!vendorId,
  });
};
export const useGetPurchaseDataByFarmer = (farmerId: string): UseQueryResult<FarmerPurchaseData, ErrorModel> => {
  return useQuery<FarmerPurchaseData, ErrorModel>({
    queryKey: ['farmer-purchase-data', farmerId],
    queryFn: () => DashboardManagementService.getInstance().getPurchaseDataByFarmer(farmerId),
    enabled: !!farmerId,
  });
};
export const useGetPurchaseDataByProduct = (
  productId: string | null
): UseQueryResult<ProductPurchaseData, ErrorModel> => {
  return useQuery<ProductPurchaseData, ErrorModel>({
    queryKey: ['product-purchase-data', productId],
    queryFn: () => DashboardManagementService.getInstance().getPurchaseDataByProduct(productId),
    enabled: !!productId,
  });
};
