import { ApiBaseState, ErrorModel, CompanyNamesData, UOMPartialData, FarmerPartialData, ProductPartialData, VendorPartialData, BranchPartialData, GetAllRFPANums, GetAllGRNNums, GetAllDealSlipNums, GetAllDeliveryChallanNums, CustomerPartialData, CustomerNames, GetDepartment } from '../../../../../api/common_api/src/index.ts';
import { UseQueryResult } from '@tanstack/react-query';

export declare function useGetCompanyNames(): UseQueryResult<ApiBaseState<CompanyNamesData[]>, ErrorModel>;
export declare function useGetFarmersPartialData(): UseQueryResult<ApiBaseState<FarmerPartialData[]>, ErrorModel>;
export declare function useGetCustomerPartialData(customerId: string): UseQueryResult<ApiBaseState<CustomerPartialData>, ErrorModel>;
export declare function useGetCustomerNames(): UseQueryResult<ApiBaseState<CustomerNames[]>, ErrorModel>;
export declare function useGetProductsPartialData(): UseQueryResult<ApiBaseState<ProductPartialData[]>, ErrorModel>;
export declare function useGetUOMPartialData(): UseQueryResult<ApiBaseState<UOMPartialData[]>, ErrorModel>;
export declare function useGetVendorsPartialData(): UseQueryResult<ApiBaseState<VendorPartialData[]>, ErrorModel>;
export declare function useGetBranchesPartialData(): UseQueryResult<ApiBaseState<BranchPartialData[]>, ErrorModel>;
export declare function useGetAllRFPANums(): UseQueryResult<ApiBaseState<GetAllRFPANums[]>, ErrorModel>;
export declare function useGetAllGRNNums(): UseQueryResult<ApiBaseState<GetAllGRNNums[]>, ErrorModel>;
export declare function useGetAllDealSlipNums(): UseQueryResult<ApiBaseState<GetAllDealSlipNums[]>, ErrorModel>;
export declare function useGetAllDeliveryChallanNums(): UseQueryResult<ApiBaseState<GetAllDeliveryChallanNums[]>, ErrorModel>;
export declare function useGetDepartmentById(deptId: string): UseQueryResult<ApiBaseState<GetDepartment>, ErrorModel>;
