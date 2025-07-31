import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { GetCustomerType, PostCustomerType } from '@prime-fresh/admin_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreateCustomerType(): UseMutationResult<ResultModel, ErrorModel, PostCustomerType, unknown>;
export declare function useUpdateCustomerTypeById(id: string): UseMutationResult<ResultModel, ErrorModel, GetCustomerType, unknown>;
export declare function useDeleteCustomerTypeById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllCustomerTypes(queryParams?: QueryParams): UseQueryResult<ApiBaseState<GetCustomerType[]>, ErrorModel>;
export declare function useGetCustomerTypeById(id: string): UseQueryResult<ApiBaseState<GetCustomerType>, ErrorModel>;
