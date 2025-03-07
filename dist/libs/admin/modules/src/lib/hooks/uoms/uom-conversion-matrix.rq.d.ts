import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { PostUOMConversionMatrix, GetUOMConversionMatrix } from '@prime-fresh/admin_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreateUOMConversionMatrix(): UseMutationResult<ResultModel, ErrorModel, PostUOMConversionMatrix, unknown>;
export declare function useUpdateUOMConversionMatrixById(id: string): UseMutationResult<ResultModel, ErrorModel, GetUOMConversionMatrix, unknown>;
export declare function useDeleteUOMConversionMatrixById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllUOMConversionMatrix(): UseQueryResult<ApiBaseState<GetUOMConversionMatrix[]>, ErrorModel>;
export declare function useGetUOMConversionMatrixById(id: string): UseQueryResult<ApiBaseState<GetUOMConversionMatrix>, ErrorModel>;
