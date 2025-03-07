import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { GetProductCategory, PostProductCategory } from '@prime-fresh/admin_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreateProductCategory(): UseMutationResult<ResultModel, ErrorModel, PostProductCategory, unknown>;
export declare function useUpdateProductCategoryById(id: string): UseMutationResult<ResultModel, ErrorModel, GetProductCategory, unknown>;
export declare function useDeleteProductCategoryById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllProductCategories(): UseQueryResult<ApiBaseState<GetProductCategory[]>, ErrorModel>;
export declare function useGetProductCategoryById(id: string): UseQueryResult<ApiBaseState<GetProductCategory>, ErrorModel>;
