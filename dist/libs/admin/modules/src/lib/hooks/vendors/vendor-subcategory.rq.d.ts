import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { GetVendorSubcategory, PostVendorSubcategory } from '@prime-fresh/admin_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreateVendorSubategory(): UseMutationResult<ResultModel, ErrorModel, PostVendorSubcategory, unknown>;
export declare function useUpdateVendorSubcategoryById(id: string): UseMutationResult<ResultModel, ErrorModel, GetVendorSubcategory, unknown>;
export declare function useDeleteVendorSubcategoryById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllVendorSubcategories(queryParams?: QueryParams): UseQueryResult<ApiBaseState<GetVendorSubcategory[]>, ErrorModel>;
export declare function useGetVendorSubcategoryById(id: string): UseQueryResult<ApiBaseState<GetVendorSubcategory>, ErrorModel>;
export declare function useGetVendorSubcategoriesByQuery(query: string): UseQueryResult<ApiBaseState<GetVendorSubcategory[]>, ErrorModel>;
