import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { GetVendor } from '@prime-fresh/admin_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreateVendor(): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useUpdateVendorById(id: string): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useDeleteVendorById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllVendors(): UseQueryResult<ApiBaseState<GetVendor[]>, ErrorModel>;
export declare function useGetVendorById(id: string): UseQueryResult<ApiBaseState<GetVendor>, ErrorModel>;
