import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { GetPaymentRequest, PostPaymentRequest } from '@prime-fresh/purchase_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreatePaymentRequest(grnid: string): UseMutationResult<ResultModel, ErrorModel, PostPaymentRequest, unknown>;
export declare function useUpdatePaymentRequestById(id: string): UseMutationResult<ResultModel, ErrorModel, GetPaymentRequest, unknown>;
export declare function useDeletePaymentRequestById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllPaymentRequests(): UseQueryResult<ApiBaseState<GetPaymentRequest[]>, ErrorModel>;
export declare function useGetPaymentRequestById(id: string): UseQueryResult<ApiBaseState<GetPaymentRequest>, ErrorModel>;
