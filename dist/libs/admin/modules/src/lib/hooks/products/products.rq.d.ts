import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { GetProduct } from '@prime-fresh/admin_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreateProduct(): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useUpdateProductById(id: string): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useDeleteProductById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllProducts(queryParams: QueryParams): UseQueryResult<ApiBaseState<GetProduct[]>, ErrorModel>;
export declare function useGetProductById(id: string): UseQueryResult<ApiBaseState<GetProduct>, ErrorModel>;
