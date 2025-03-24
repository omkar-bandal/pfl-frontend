import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { GetProductSubcategory, PostProductSubcategory } from '@prime-fresh/admin_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreateProductSubategory(): UseMutationResult<ResultModel, ErrorModel, PostProductSubcategory, unknown>;
export declare function useUpdateProductSubcategoryById(id: string): UseMutationResult<ResultModel, ErrorModel, GetProductSubcategory, unknown>;
export declare function useDeleteProductSubcategoryById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllProductSubcategories(queryParams?: QueryParams): UseQueryResult<ApiBaseState<GetProductSubcategory[]>, ErrorModel>;
export declare function useGetProductSubcategoryById(id: string): UseQueryResult<ApiBaseState<GetProductSubcategory>, ErrorModel>;
