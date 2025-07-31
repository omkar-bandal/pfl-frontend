import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { GetPackagingMaterial, PostPackagingMaterial } from '@prime-fresh/admin_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreatePackagingMaterial(): UseMutationResult<ResultModel, ErrorModel, PostPackagingMaterial, unknown>;
export declare function useUpdatePackagingMaterialById(id: string): UseMutationResult<ResultModel, ErrorModel, GetPackagingMaterial, unknown>;
export declare function useDeletePackagingMaterialById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllPackagingMaterials(queryParams?: QueryParams): UseQueryResult<ApiBaseState<GetPackagingMaterial[]>, ErrorModel>;
export declare function useGetPackagingMaterialById(id: string): UseQueryResult<ApiBaseState<GetPackagingMaterial>, ErrorModel>;
