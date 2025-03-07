import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { PostUOM, GetUOM } from '@prime-fresh/admin_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreateUOM(): UseMutationResult<ResultModel, ErrorModel, PostUOM, unknown>;
export declare function useUpdateUOMById(id: string): UseMutationResult<ResultModel, ErrorModel, PostUOM, unknown>;
export declare function useDeleteUOMById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllUOMs(): UseQueryResult<ApiBaseState<GetUOM[]>, ErrorModel>;
export declare function useGetUOMById(id: string): UseQueryResult<ApiBaseState<GetUOM>, ErrorModel>;
