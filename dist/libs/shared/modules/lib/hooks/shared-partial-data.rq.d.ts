import { ApiBaseState, ErrorModel, CompanyNamesData, UOMPartialData, FarmerPartialData, ProductPartialData, VendorPartialData, BranchPartialData } from '../../../../../api/common_api/src/index.ts';
import { UseQueryResult } from '@tanstack/react-query';

export declare function useGetCompanyNames(): UseQueryResult<ApiBaseState<CompanyNamesData[]>, ErrorModel>;
export declare function useGetFarmersPartialData(): UseQueryResult<ApiBaseState<FarmerPartialData[]>, ErrorModel>;
export declare function useGetProductsPartialData(): UseQueryResult<ApiBaseState<ProductPartialData[]>, ErrorModel>;
export declare function useGetUOMPartialData(): UseQueryResult<ApiBaseState<UOMPartialData[]>, ErrorModel>;
export declare function useGetVendorsPartialData(): UseQueryResult<ApiBaseState<VendorPartialData[]>, ErrorModel>;
export declare function useGetBranchesPartialData(): UseQueryResult<ApiBaseState<BranchPartialData[]>, ErrorModel>;
