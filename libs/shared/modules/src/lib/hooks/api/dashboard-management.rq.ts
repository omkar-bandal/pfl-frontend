import { DashboardManagementService, ErrorModel, FarmerPurchaseData, ProductPurchaseData, VendorPurchaseData } from "@prime-fresh/common_api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useGetPurchaseDataByVendor = (vendorId: string): UseQueryResult<VendorPurchaseData, ErrorModel> => {
  return useQuery<VendorPurchaseData, ErrorModel>({
    queryKey: ['vendor-purchase-data', vendorId],
    queryFn: () => DashboardManagementService.getInstance().getPurchaseDataByVendor(vendorId),
    enabled: !!vendorId
  });
};
export const useGetPurchaseDataByFarmer = (farmerId: string): UseQueryResult<FarmerPurchaseData, ErrorModel> => {
  return useQuery<FarmerPurchaseData, ErrorModel>({
    queryKey: ['farmer-purchase-data', farmerId],
    queryFn: () => DashboardManagementService.getInstance().getPurchaseDataByFarmer(farmerId),
    enabled: !!farmerId
  });
};
export const useGetPurchaseDataByProduct = (productId: string | null): UseQueryResult<ProductPurchaseData, ErrorModel> => {
  return useQuery<ProductPurchaseData, ErrorModel>({
    queryKey: ['product-purchase-data', productId],
    queryFn: () => DashboardManagementService.getInstance().getPurchaseDataByProduct(productId),
    enabled: !!productId
  });
};