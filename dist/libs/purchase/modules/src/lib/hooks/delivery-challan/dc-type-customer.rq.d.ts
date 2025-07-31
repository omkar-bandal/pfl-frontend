import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { IDeliveryChallanTypeCustomer } from '@prime-fresh/purchase_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare const useCreateDCTypeCustomer: () => UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare const useUpdateDCTypeCustomerById: (id: string) => UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare const useDeleteDCTypeCustomerById: (id: string) => UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare const useGetAllDCTypeCustomers: (queryParams?: QueryParams) => UseQueryResult<ApiBaseState<IDeliveryChallanTypeCustomer[]>, ErrorModel>;
export declare const useGetDCTypeCustomerForViewById: (id: string) => UseQueryResult<ApiBaseState<IDeliveryChallanTypeCustomer>, ErrorModel>;
export declare const useGetDCTypeCustomerForUpdateById: (id: string) => UseQueryResult<ApiBaseState<IDeliveryChallanTypeCustomer>, ErrorModel>;
