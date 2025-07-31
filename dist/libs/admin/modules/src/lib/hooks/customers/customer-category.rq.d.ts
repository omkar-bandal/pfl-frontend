import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { GetCustomerCategory, PostCustomerCategory } from '@prime-fresh/admin_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreateCustomerCategory(): UseMutationResult<ResultModel, ErrorModel, PostCustomerCategory, unknown>;
export declare function useUpdateCustomerCategoryById(id: string): UseMutationResult<ResultModel, ErrorModel, GetCustomerCategory, unknown>;
export declare function useDeleteCustomerCategoryById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllCustomerCategories(queryParams?: QueryParams): UseQueryResult<ApiBaseState<GetCustomerCategory[]>, ErrorModel>;
export declare function useGetCustomerCategoryById(id: string): UseQueryResult<ApiBaseState<GetCustomerCategory>, ErrorModel>;
