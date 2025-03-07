import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { GetCustomer } from '@prime-fresh/admin_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreateCustomer(): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useUpdateCustomerById(id: string): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useDeleteCustomerById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllCustomers(): UseQueryResult<ApiBaseState<GetCustomer[]>, ErrorModel>;
export declare function useGetCustomerById(id: string): UseQueryResult<ApiBaseState<GetCustomer>, ErrorModel>;
