import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { GetVendorCategory, PostVendorCategory } from '@prime-fresh/admin_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreateVendorCategory(): UseMutationResult<ResultModel, ErrorModel, PostVendorCategory, unknown>;
export declare function useUpdateVendorCategoryById(id: string): UseMutationResult<ResultModel, ErrorModel, GetVendorCategory, unknown>;
export declare function useDeleteVendorCategoryById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllVendorCategories(): UseQueryResult<ApiBaseState<GetVendorCategory[]>, ErrorModel>;
export declare function useGetVendorCategoryById(id: string): UseQueryResult<ApiBaseState<GetVendorCategory>, ErrorModel>;
