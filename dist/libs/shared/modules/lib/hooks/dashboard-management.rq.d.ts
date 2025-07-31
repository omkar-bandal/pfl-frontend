import { UseQueryResult } from '@tanstack/react-query';
import { ErrorModel, FarmerPurchaseData, ProductPurchaseData, VendorPurchaseData } from '../../../../../api/common_api/src/index.ts';

export declare const useGetPurchaseDataByVendor: (vendorId: string) => UseQueryResult<VendorPurchaseData, ErrorModel>;
export declare const useGetPurchaseDataByFarmer: (farmerId: string) => UseQueryResult<FarmerPurchaseData, ErrorModel>;
export declare const useGetPurchaseDataByProduct: (productId: string) => UseQueryResult<ProductPurchaseData, ErrorModel>;
