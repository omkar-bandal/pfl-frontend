import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { IReturnByCustomer } from '../../../../../api/inventory_api/src/index.ts';
import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '../../../../../api/common_api/src/index.ts';

export declare function useCreateReturnedByCustomer(): UseMutationResult<ResultModel, ErrorModel, Omit<IReturnByCustomer, 'id'>, unknown>;
export declare function useUpdateReturnedByCustomer(id: string): UseMutationResult<ResultModel, ErrorModel, IReturnByCustomer, unknown>;
export declare function useDeleteReturnedByCustomerById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllReturnedByCustomers(queryParams?: QueryParams): UseQueryResult<ApiBaseState<IReturnByCustomer[]>, ErrorModel>;
export declare function useGetReturnedByCustomerById(id: string): UseQueryResult<ApiBaseState<IReturnByCustomer>, ErrorModel>;
